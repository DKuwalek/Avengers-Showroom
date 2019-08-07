import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public avengers;

  constructor(private avengersSerivce: AvngrsService, private authService: AuthService) { 
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

  logOut(){
    this.authService.logout();
  }
}
