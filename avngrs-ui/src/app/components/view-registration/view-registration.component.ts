import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public avngr;

  constructor(private avngrsService: AvngrsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Route gottem " + this.route.snapshot.params.id);
    this.getAvngrReg(this.route.snapshot.params.id);
    // console.log("ng ON INIT go them avngr equal to " + this.avngr.name);
    // this.avngr = this.getAvngrReg(1);
  }

  getAvngrReg(id: Number) {
    this.avngrsService.getAvngr(id).subscribe(
      data => {
        this.avngr = data;
        console.log("Got them datas!");
      },
      err => console.error(err),
      () => console.log("AVNGR loaded in the detail view")
    )
  }

}
