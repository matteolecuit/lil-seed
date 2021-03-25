import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataPotsService {


  constructor(private http: HttpClient) {
  }

  getById(id) {
    return this.http.get(environment.API_URL + "/pots/" + id + "data");
  }

  deleteById(id) {
    return this.http.delete(environment.API_URL + "/pots/" + id + "data");
  }
}
