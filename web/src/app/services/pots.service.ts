import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import {environment} from "@environment/environment";

@Injectable({
    providedIn: 'root',
})
export class PotsService {
    constructor(private http: HttpClient) {
    }

    getPots() {
        return this.http.get(environment.API_URL + "pots");
    }

    postPot(name, macAddress) {
        return this.http.post<any>(environment.API_URL + "pots", {
            name: name,
            macAddress: macAddress,
        });
    }

    getPotById(id) {
        return this.http.get(environment.API_URL + "pots" + '/' + id);
    }

    putPotById(id, name, macAddress) {
        return this.http.put<any>(environment.API_URL + "pots" + '/' + id, {
            name: name,
            macAddress: macAddress,
        });
    }

    patchPotById(id, name) {
        return this.http.patch<any>(environment.API_URL + "pots" + '/' + id, { name: name });
    }

    deletePotById(id) {
        return this.http.delete(environment.API_URL + "pots" + '/' + id);
    }
}
