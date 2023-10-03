import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  carList:Array<string> = ["Mercedes-Benz", "BMW", "Nissan", "Porsche", "Chevrolet", "Volkswagen", "Ferrari", "Land Rover", "Alfa Romeo", "MINI"]

constructor(private fb:FormBuilder){

}
  // Toggle = false;
  // onClick(){
  //   this.Toggle = !this.Toggle
  // }

}
