import { Component } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, Subscription } from 'rxjs';

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
   
  // ngOnInit(){
  //   this.onlodedata();

  // }
  
  
  onlodedata() {
    this.TS.getPosts().subscribe((response) => {
      this.tourismData = response;
    });
  }

  ngOnInit() {
  this.onlodedata();
}
  // // setTravel(){
  //   this.TS.getPosts().subscribe((response) => {
  //     this.tourismData = response;
  //   })
  // }

  // ngOnDestroy() {
  //   this.getTravelList.unsubscribe();
  // }

}







