import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private angrsService : AvngrsService) { }

  ngOnInit() {
  }

}
