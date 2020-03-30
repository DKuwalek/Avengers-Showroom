import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'})
};

// const restEndpointAddress = '/server/api/v1/avngrs/';
const restEndpointAddress = 'http://5d8de5c5370f02001405c5e5.mockapi.io/maniana/mock-task-list';

const putEndpoint = 'localhost:8080/api/v1/avngrs'

@Injectable({
  providedIn: 'root'
})
export class AvngrsService {

  constructor(private http: HttpClient) { }

  getAvngrs() {
    let token = localStorage.getItem('access_token');
    return this.http.get(restEndpointAddress,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  getAvngr(id: Number) {
    let token = localStorage.getItem('access_token');
    return this.http.get(restEndpointAddress + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
  }

  ceateAvngr(bike) {
    let token = localStorage.getItem('access_token');
    let body = JSON.stringify(bike);
    return this.http.post(restEndpointAddress, body, httpOptions);
  }
}
