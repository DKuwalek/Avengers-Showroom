import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AvngrsService {

  constructor(private http: HttpClient) { }

  getAvngrs() {
    return this.http.get('/server/api/v1/avngrs');
  }
}
