import { Component, Input } from '@angular/core';
import { Travel } from '../app.component';
import { TravelService } from '../travel.service';
import { ActivatedRoute } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trave-details',
  templateUrl: './trave-details.component.html',
  styleUrls: ['./trave-details.component.css']
})
export class TraveDetailsComponent {
  Id:string;
  video!:SafeResourceUrl;
   TravelingData:any=[] 


   
  constructor(private travelDetails:TravelService ,private ActRout:ActivatedRoute,private sanitizer:DomSanitizer){
    const {id} =  this.ActRout.snapshot.params
   

    this.Id = id;
    this.getTravel()

  }
  
  getTravel() {
    this.travelDetails.getDetailsbyid(this.Id).subscribe((data:any) => {
      this.TravelingData = {...data,
      video:this.sanitizer.bypassSecurityTrustResourceUrl(data.video)
      }
      console.log(this.video)
  console.log(this.TravelingData)
  
    });
  }
}
