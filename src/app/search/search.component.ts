import { Component } from '@angular/core';
import { Subscription, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { TravelService } from '../travel.service';
import { FormBuilder } from '@angular/forms';
import { Travel } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  tourismData:Travel[] = []
  getTravelList: Subscription | any;
  value:Boolean=false;
  constructor(private TS: TravelService, private fb: FormBuilder){

  }

  // Searchingdata =  this.fb.group({
  //   name:"",
  //   rating: 0,
  //   image:"",
  //   description:"",
  //   location:"",
  //   video:"",
  //   activities: ""
  // })

  onlodedata() {
    this.TS.getPosts().subscribe((response) => {
      this.tourismData = response;

    });
  }

  Searchingdata = this.fb.group({
    search: '',
    // name: ""
  });


  get search() {
    return this.Searchingdata.get('search');
  }

  ngOnInit() {
  this.search?.valueChanges
  .pipe(
    debounceTime(1500),
    distinctUntilChanged(),
    switchMap((name) => name ? this.TS.searchTravelCard(name || '') : of([]))
  )
  .subscribe((mvList) => {
    this.tourismData = mvList;
  });
// this.onlodedata();
}
}


