import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserPotService {
    constructor(private http: HttpClient) {}

    getPotsByIdUser(id) {
        return this.http.get(
            environment.API_URL + 'users' + '/' + id + '/pots'
        );
    }

    deletePotsByIdUser(id) {
        return this.http.delete(
            environment.API_URL + 'users' + '/' + id + '/pots'
        );
    }
}
