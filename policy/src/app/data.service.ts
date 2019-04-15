import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {User} from './user'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _termpoliy : User[]=
  [
    {id:1,name:'kbdkbd',Disp:'fennvlenenle',price:33}
  ];

  constructor(private  http : HttpClient) { }
  // LoadData(){
    private url: string= 'http://localhost:62841/api/termpolicy';
  // return this.http.get(url); 
  // }

  getdetailviaapi() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
