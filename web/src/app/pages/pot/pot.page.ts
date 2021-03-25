
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
          value: 18,
          maxValue: 30,
          color: "#54FBB1"
        },
        {
          name: "sun",
          value: 29,
          maxValue: 50,
          color: "#F6B412"
        },
        {
          name: "water",
          value: 10,
          maxValue: 20,
          color: "#FF44FF"
        },
        {
          name: "temperature",
          value: 19,
          maxValue: 30,
          color: "#98F44B"
        }
      ]
    }
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.dataPotsService.getById(params['id']).subscribe((response) => {
        this.data = response;
        this.temperatures = this.data.filter(stat => stat.type == 0);
        this.humidity = this.data.filter(stat => stat.type == 1);
        this.water = this.data.filter(stat => stat.type == 2);
        this.luminosity = this.data.filter(stat => stat.type == 3);
        
    });
    });
  }

}
