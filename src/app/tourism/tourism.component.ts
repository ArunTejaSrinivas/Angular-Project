import { Component } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent {
  tourismData:Travel[] = []

  constructor(private TS: TravelService){

  }
   
  ngOnInit(){
    this.onlodedata();

  }
  
  
  onlodedata() {
    this.TS.getPosts().subscribe((response) => {
    
      this.tourismData = response;

    });
  }
  // // setTravel(){
  //   this.TS.getPosts().subscribe((response) => {
  //     this.tourismData = response;
  //   })
  // }

}







