import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ls-pot-card',
  templateUrl: './pot-card.component.html',
  styleUrls: ['./pot-card.component.scss']
})
export class PotCardComponent implements OnInit {
  @Input() pot: any;
  name: string;

  constructor() { 
    console.log(this.pot);
  }

  ngOnInit(): void {
  }
}
