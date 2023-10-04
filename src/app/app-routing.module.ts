import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TourismComponent } from './tourism/tourism.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SearchComponent } from './search/search.component';
import { TraveDetailsComponent } from './trave-details/trave-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HelpUserComponent } from './help-user/help-user.component';


const routes: Routes = [
  { path: 'travelPlaces', component: TourismComponent},
  { path: 'travelForm', component: FormComponent },
  { path: 'travelPlaces/edit/:id', component: EditFormComponent},
  { path: '', component: SearchComponent,pathMatch:"full"},
  { path: 'travelPlaces/travelDetails/:id', component: TraveDetailsComponent },
  { path: 'favourites', component: FavouritesComponent},
  { path: 'helpUser', component: HelpUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
