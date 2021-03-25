import { Component, OnInit } from '@angular/core';
import { PotsService } from '@services/pots.service';
import { UserPotService } from '@services/user-pot.service';

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

    constructor(private userPotService: UserPotService) {}

    ngOnInit(): void {
        console.log(localStorage.getItem("jwt"));
        this.userPotService.getPotsByIdUser(localStorage.getItem("userId")).subscribe((data) => {
            for (const d of data as any) {
                this.tabPots.push({
                    id: d.id,
                    name: d.name,
                    macAddress: d.macAddress,
                });
            }
        });
    }
}
