
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-pot',
  templateUrl: './pot.page.html',
  styleUrls: ['./pot.page.scss']
})
export class PotPage implements OnInit {
  @Input() pot: any;

  constructor() {
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
  }

}
