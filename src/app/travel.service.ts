import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Travel } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient) { }


  getPosts(){
    return this.http.get<Travel[]>("https://64f6f42a9d7754084952d8c3.mockapi.io/data");
  }


  deleteTravelById(id: string){
    return this.http.delete(`https://64f6f42a9d7754084952d8c3.mockapi.io/data/${id}`);
  }

  newTravelRecord(newTravel:any){
    return this.http.post<Travel[]>(`https://64f6f42a9d7754084952d8c3.mockapi.io/data`, newTravel)
  }


  getIdForEdit(id:string){
    return this.http.get<Travel>(`https://64f6f42a9d7754084952d8c3.mockapi.io/data/${id}`)
  }

  editTravalDataById(id:string, editTravel:Travel ){
    return this.http.put(`https://64f6f42a9d7754084952d8c3.mockapi.io/data/${id}`, editTravel)
  }

}
