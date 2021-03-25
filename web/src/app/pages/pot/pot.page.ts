
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataPotsService } from '@services/data-pots.service';
import { PotsService } from '@services/pots.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.page.html',
  styleUrls: ['./pot.page.scss']
})
export class PotPage implements OnInit {
  @Input() pot: any;
  private routeSub: Subscription;
  private data: any;

  private temperatures: any[];
  private humidity: any[];
  private water: any[];
  private luminosity: any[];

  constructor(private dataPotsService: DataPotsService, private route: ActivatedRoute) {
    this.pot = {
      name: "Salon - Pétunia",
      stats: [
        {
          name: "humidity",
          value: 0,
          maxValue: 50,
          color: "#54FBB1"
        },
        {
          name: "sun",
          value: 0,
          maxValue: 340,
          color: "#F6B412"
        },
        {
          name: "water",
          value: 0,
          maxValue: 700,
          color: "#FF44FF"
        },
        {
          name: "temperature",
          value: 0,
          maxValue: 25,
          color: "#98F44B"
        }
      ]
    }
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.dataPotsService.getById(params['id']).subscribe((response) => {
        this.data = response;
        this.temperatures = this.data.filter(stat => stat.type == 0).sort((a, b) => b.insert_date - a.insert_date).reverse();
        this.humidity = this.data.filter(stat => stat.type == 1).sort((a, b) => b.insert_date - a.insert_date).reverse();
        this.water = this.data.filter(stat => stat.type == 2).sort((a, b) => b.insert_date - a.insert_date).reverse();
        this.luminosity = this.data.filter(stat => stat.type == 3).sort((a, b) => b.insert_date - a.insert_date).reverse();

        this.pot.stats[0].value = this.humidity[0].data;
        this.pot.stats[1].value = this.luminosity[0].data;
        this.pot.stats[2].value = this.water[0].data;
        this.pot.stats[3].value = this.temperatures[0].data;

      });
    });
  }

}
