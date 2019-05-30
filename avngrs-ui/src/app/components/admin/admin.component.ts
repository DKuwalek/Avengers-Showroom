import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public avengers;

  constructor(private avengersSerivce: AvngrsService) { 
    // this.avengers = avengersSerivce.getAvngrs();
  }

  ngOnInit() {
    this.getAvengrs();
  }

  getAvengrs() {
    this.avengersSerivce.getAvngrs().subscribe(
      data => {this.avengers = data},
      err => console.error(err),
      () => console.log('Avngrs loaded!')
    )
  }
}
