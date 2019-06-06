import { Component, OnInit } from '@angular/core';
import { AvngrsService } from "../../services/avngrs.service";
import { FormGroup, Validators, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avengerForm: FormGroup;
  validMessage: String = '';
  booleans: String[] = [
    'true',
    'false'
  ];

  constructor(private angrsService : AvngrsService) { }

  ngOnInit() {
    this.avengerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      friendly: new FormControl('', Validators.required),
      lastMovieReleaseDate: new FormControl('', Validators.required),
      numberOfMovies: new FormControl('', Validators.required)
    })
  }

  submitRegistration(){
    if(this.avengerForm.valid){
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
      this.validMessage = 'Errors in the form!';
      Object.keys(this.avengerForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.avengerForm.get(key).errors;
        if (controlErrors != null) {
              Object.keys(controlErrors).forEach(keyError => {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
              });
            }
          });
    }

  }
}
