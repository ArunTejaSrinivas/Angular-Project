import { Component } from '@angular/core';
import { TravelService } from '../travel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


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
    name:"",
    rating: 0,
    image:"",
    description:"",
    location:"",
    video:"",
    activities: ""
  })

  onSubmit(){
    this.formDetails = this.formData.value;
    this.travelservice.newTravelRecord(this.formDetails).subscribe(()=> {
      this.rout.navigate(['/travelPlaces'])
    })
  } 


}
