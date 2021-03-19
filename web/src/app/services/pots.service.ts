import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PotsService {
    constructor(private http: HttpClient) {}

    localUrl = 'http://localhost:3000/pots';

    getPots() {
        return this.http.get(this.localUrl);
    }

    postPot(name, macAddress) {
        return this.http.post<any>(this.localUrl, {
            name: name,
            macAddress: macAddress,
        });
    }

    getPotById(id) {
        return this.http.get(this.localUrl + '/' + id);
    }

    putPotById(id, name, macAddress) {
        return this.http.put<any>(this.localUrl + '/' + id, {
            name: name,
            macAddress: macAddress,
        });
    }

    patchPotById(id, name) {
        return this.http.patch<any>(this.localUrl + '/' + id, { name: name });
    }

    deletePotById(id) {
        return this.http.delete(this.localUrl + '/' + id);
    }
}
