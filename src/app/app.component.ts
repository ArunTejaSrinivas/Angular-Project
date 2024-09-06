import { Component } from '@angular/core';
import { environment } from '../app/config';


export interface Travel{
  name:string;
  image:string;
  description:string;
  location:string;
  video:string;
  rating:number;
  activities:string;
  id:string;
  visited:boolean;
  favourite:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  apiUrl: string = environment.DOMAIN;
  constructor() {
    console.log('API URL:', this.apiUrl);
  }
}
