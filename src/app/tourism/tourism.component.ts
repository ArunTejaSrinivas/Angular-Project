import { Component } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent {
  tourismData:Travel[] = []
  getTravelList: Subscription | any;

  constructor(private TS: TravelService, private fb: FormBuilder){

  }
  
  onlodedata() {
    this.TS.getPosts().subscribe((response) => {
      this.tourismData = response;
    });
  }

  ngOnInit() {
  this.onlodedata();
}

}







