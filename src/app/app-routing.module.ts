import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TourismComponent } from './tourism/tourism.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SearchComponent } from './search/search.component';
import { TraveDetailsComponent } from './trave-details/trave-details.component';

const routes: Routes = [
  { path: 'travelPlaces', component: TourismComponent},
  { path: 'travelForm', component: FormComponent },
  { path: 'travelPlaces/edit/:id', component: EditFormComponent},
  { path: '', component: SearchComponent,pathMatch:"full"},
  { path: 'travelPlaces/travelDetails/:id', component: TraveDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
