import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PotsService } from 'src/app/services/pots.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    // Temperatures
    public temperaturesChartData: ChartDataSets[] = [
        { data: [18, 19, 21, 16, 16, 17, 18], label: 'Salon - Géranium' },
        { data: [19, 18, 17, 16, 19, 21, 19], label: 'Kouizine - Tulipe' },
    ];
    public temperaturesChartLabels: Label[] = [
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
    ];
    public temperaturesChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };
    public temperaturesChartColors: Color[] = [
        {
            backgroundColor: 'rgba(255,0,0,0.3)',
        },
    ];
    public temperaturesChartLegend = true;
    public temperaturesChartType = 'line';
    public temperaturesChartPlugins = [];

    // Hygrometry
    public hygrometryChartData: ChartDataSets[] = [
        {
            data: [0.4, 0.45, 0.46, 0.55, 0.4, 0.3, 0.2],
            label: 'Salon - Géranium',
        },
        {
            data: [0.4, 0.4, 0.4, 0.51, 0.55, 0.4, 0.45],
            label: 'Kouizine - Tulipe',
        },
    ];
    public hygrometryChartLabels: Label[] = [
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
    ];
    public hygrometryChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };
    public hygrometryChartColors: Color[] = [
        {
            backgroundColor: 'rgba(255,0,0,0.3)',
        },
    ];
    public hygrometryChartLegend = true;
    public hygrometryChartType = 'line';
    public hygrometryChartPlugins = [];

    public tabPots: any = [];

    constructor(private apiPots: PotsService) {}

    ngOnInit(): void {}
}
