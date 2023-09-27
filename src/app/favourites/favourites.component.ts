import { Component, Input } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  @Input() tourismData:any

  constructor(private favouriteData: TravelService){
    
  }

ngOnInit(){
  this.favouriteData.favouriteIdlist().subscribe((data)=>{
    this.tourismData=data
  })
}




}
