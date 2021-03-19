import { Component, OnInit } from '@angular/core';
import { PotsService } from 'src/app/services/pots.service';

@Component({
    selector: 'app-add-pot',
    templateUrl: './add-pot.page.html',
    styleUrls: ['./add-pot.page.scss'],
})
export class AddPotPage implements OnInit {
    constructor(private apiPots: PotsService) {}

    ngOnInit(): void {}
}
