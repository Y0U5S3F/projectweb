
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Offre } from '../Offre';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OffreService {

  private apiUrl = 'https://www.jsonkeeper.com/b/S7H6';

  constructor(private http: HttpClient) { }

  //Post
  createOffre(data:any){
    return this.http.post<any>(this.apiUrl, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get
  getOffres(){
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOffre(id: number){
    return this.http.get<any>(`${this.apiUrl}?offreId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Delete
  deleteOffre(id: number){
    return this.http.delete<any>(`${this.apiUrl}?offreId=${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Put
  updateOffre(data:any,id:number){
    return this.http.put<any>(`${this.apiUrl}?offreId=${id}`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}