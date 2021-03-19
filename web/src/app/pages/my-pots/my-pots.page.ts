import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-pots',
	templateUrl: './my-pots.page.html',
	styleUrls: ['./my-pots.page.scss']
})
export class MyPotsPage implements OnInit {
	pots: any = [];

	constructor() {
		this.pots = [
			{
				name: "Salon - Pétunia",
				stats: {
					humidity: 18,
					sun: 29,
					water: 10,
					temperature: 19 
				}
			},
			{
				name: "Cuisine - Tournesol",
				stats: {
					humidity: 20,
					sun: 30,
					water: 14,
					temperature: 18 
				}
			},
		]
	 }

	ngOnInit(): void {
	}

}
