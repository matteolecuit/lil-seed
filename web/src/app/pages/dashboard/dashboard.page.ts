import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PotsService } from '@services/pots.service';
import { DataPotsService } from '@services/data-pots.service';
import { UserPotService } from '@services/user-pot.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    // Temperatures
    public temperaturesChartData: ChartDataSets[];
    public chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    position: "bottom",
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'MMM D', // This is the default
                        },
                    },
                }
            ]
        }
    };
    public chartColors: Color[] = [
        {
            backgroundColor: 'rgba(255,0,0,0.3)',
        },
    ];
    public chartLegend = true;
    public chartType = 'line';

    // Hygrometry
    public hygrometryChartData: ChartDataSets[];
    public waterChartData: ChartDataSets[];
    public luminosityChartData: ChartDataSets[];

    public tabPots: any = [];

    constructor(private dataPotsService: DataPotsService, private userPotsService: UserPotService) { }

    ngOnInit(): void {
        this.userPotsService.getPotsByIdUser(localStorage.getItem('userId')).subscribe((pots: any) => {
            pots.forEach(pot => {
                this.dataPotsService.getById(pot.id).subscribe((response: any) => {
                    let temperatureDataset: ChartDataSets = {
                        data: [],
                        label: pot.name
                    };
                    let humidityDataset: ChartDataSets = {
                        data: [],
                        label: pot.name
                    };
                    let waterDataset: ChartDataSets = {
                        data: [],
                        label: pot.name
                    };
                    let luminosityDataset: ChartDataSets = {
                        data: [],
                        label: pot.name
                    };

                    response.forEach(element => {
                        if (element.data > 0) { // évite les erreurs de mesure
                            switch (element.type) {
                                case 0:
                                    temperatureDataset.data.push({ x: new Date(element.insert_date).getTime(), y: element.data } as any);
                                    break;
                                case 1:
                                    humidityDataset.data.push({ x: new Date(element.insert_date).getTime(), y: element.data } as any);
                                    break;
                                case 2:
                                    waterDataset.data.push({ x: new Date(element.insert_date).getTime(), y: element.data } as any);
                                    break;
                                case 3:
                                    luminosityDataset.data.push({ x: new Date(element.insert_date).getTime(), y: element.data } as any);
                                    break;
                                default:
                                    break;
                            }
                        }
                    });
                    this.temperaturesChartData = [temperatureDataset];
                    this.hygrometryChartData = [humidityDataset];
                    this.waterChartData = [waterDataset];
                    this.luminosityChartData = [luminosityDataset];

                })
            });
        })
    }
}
