import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {YouTubePlayerModule} from '@angular/youtube-player';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourismComponent } from './tourism/tourism.component';
import { TravelPlacesComponent } from './travel-places/travel-places.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SearchComponent } from './search/search.component';
import { TraveDetailsComponent } from './trave-details/trave-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HelpUserComponent } from './help-user/help-user.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    TourismComponent,
    TravelPlacesComponent,
    FormComponent,
    EditFormComponent,
    SearchComponent,
    TraveDetailsComponent,
    FavouritesComponent,
    HelpUserComponent,
    CreateProfileComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,   
    MatButtonModule,
    MatSlideToggleModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
