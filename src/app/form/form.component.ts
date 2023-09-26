import { Component } from '@angular/core';
import { TravelService } from '../travel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formDetails:any ;

  constructor(private travelservice: TravelService, private fb: FormBuilder, private rout: Router){

  }

  formData =  this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    rating: 0,
    image:['', [Validators.required, Validators.minLength(5), Validators.pattern('^http.*')]],
    description:"",
    location:['', [Validators.required, Validators.minLength(3)]],
    video:"",
    activities: "",
    visited: false
  })

  onSubmit(){
    if (this.formData.valid) {
    this.formDetails = this.formData.value;
    this.travelservice.newTravelRecord(this.formDetails).subscribe(()=> {
      this.rout.navigate(['/travelPlaces'])
    })
  }
  } 


  get name() {
    return this.formData?.get('name');
  }

  get image() {
    return this.formData?.get('image');
  }

  get location() {
    return this.formData?.get('location');
  }

}
