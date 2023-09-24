import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TravelService } from '../travel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from '../app.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  idForEdit: any;

  constructor(private fb:FormBuilder, private editTravel: TravelService, private route: ActivatedRoute, private rout:Router){

  }
  editForm =  this.fb.group({
    name:"",
    rating: 0,
    image:"",
    description:"",
    location:"",
    video:"",
    activities: ""
  })

  ngOnInit(){
    const {id} = this.route.snapshot.params;
    this.idForEdit = id;
    this.editTravel.getIdForEdit(id).subscribe((data) => {
      this.editForm.patchValue(data)
    })
  }


  edit(){
    const newUpdate = this.editForm.value
    this.editTravel.editTravalDataById(this.idForEdit, newUpdate as Travel)
    .subscribe(() => {
      this.rout.navigate(['/travelPlaces'])
    })
  }




}
