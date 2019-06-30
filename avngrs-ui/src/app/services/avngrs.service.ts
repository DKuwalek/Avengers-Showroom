import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'})
};

const restEndpointAddress = '/server/api/v1/avngrs/';
const putEndpoint = 'localhost:8080/api/v1/avngrs'

@Injectable({
  providedIn: 'root'
})
export class AvngrsService {

  constructor(private http: HttpClient) { }

  getAvngrs() {
    return this.http.get(restEndpointAddress);
  }

  getAvngr(id: Number) {
    return this.http.get(restEndpointAddress + id)
  }

  ceateAvngr(bike) {
    let body = JSON.stringify(bike);
    return this.http.post(restEndpointAddress, body, httpOptions);
  }
}
