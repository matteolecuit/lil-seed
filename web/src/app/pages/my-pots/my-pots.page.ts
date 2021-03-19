import { Component, OnInit } from '@angular/core';
import { PotsService } from 'src/app/services/pots.service';

@Component({
    selector: 'app-my-pots',
    templateUrl: './my-pots.page.html',
    styleUrls: ['./my-pots.page.scss'],
})
export class MyPotsPage implements OnInit {
    public tabPots: any = [];

    public name = 'cabane';

    public macAddress = '1f2e3d4c5b6a';

    postId;

    pot;

    constructor(private apiPots: PotsService) {}

    ngOnInit(): void {
        this.apiPots.getPots().subscribe((data) => {
            for (const d of data as any) {
                this.tabPots.push({
                    id: d.id,
                    name: d.name,
                    macAddress: d.macAddress,
                });
            }
        });

        this.apiPots
            .postPot(this.name, this.macAddress)
            .toPromise()
            .then((data) => {
                this.postId = data.id;
                return data.id;
            })
            .then((postId) =>
                this.apiPots.getPotById(postId).subscribe((data) => {
                    console.log(data);
                    return data;
                })
            )
            .then((postId) => {
                this.apiPots.deletePotById(this.postId).subscribe((data) => {
                    console.log(data);
                });
            });
    }
}
