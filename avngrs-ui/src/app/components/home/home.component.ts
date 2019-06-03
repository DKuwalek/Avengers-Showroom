import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avengerForm: FormGroup;
  validMessage: String = '';


  constructor(private angrsService : AvngrsService) { }

  ngOnInit() {
    this.avengerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      // friendly: new FormControl('', Validators.required),
      numberOfMovies: new FormControl('', Validators.required)
    })
  }

  submitRegistration(){
    if(this.avengerForm.valid){
      // this.avengerForm.setValue({'friendly': true});
      this.validMessage= 'Registration is ok'
      this.angrsService.ceateAvngr(this.avengerForm.value).subscribe(
        data => {
          console.log(data);
          this.avengerForm.reset();
          return true;
        },
        error => {
          console.log(error)
          // return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = 'Errors in the form!'
    }

  }
}
