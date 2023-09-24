import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-places',
  templateUrl: './travel-places.component.html',
  styleUrls: ['./travel-places.component.css']
})
export class TravelPlacesComponent {
  @Output() reloadData = new EventEmitter();
  @Input() TravelingData:Travel = {
  name:"",
  image:"",
  description:"",
  location:"",
  video:"",
  rating: 0,
  activities:"",
  id:""
}

constructor(private travelService: TravelService, private rout: Router){
  
}

delete(){
  if(confirm("Are you sure you want to delete the travel record")){
    this.travelService.deleteTravelById(this.TravelingData.id).subscribe(() => {
      console.log("deleted")
      this.reloadData.emit()
    })
  }
}


onEdit(){
this.rout.navigate([`travelPlaces/edit/${this.TravelingData.id}`])
}

}
