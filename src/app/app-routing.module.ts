import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TourismComponent } from './tourism/tourism.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  { path: 'travelPlaces', component: TourismComponent},
  { path: 'travelForm', component: FormComponent },
  { path: 'travelPlaces/edit/:id', component: EditFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
