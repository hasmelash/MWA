import { Injectable } from '@angular/core';
import {stringify} from "querystring";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  key = 'henock';
  constructor(private http:HttpClient) { }

  getOnlineData(){
    const x = this.http.get("https://randomuser.me/api/?results=10");
    x.subscribe(data=>localStorage.setItem(this.key, JSON.stringify(data)));
    //console.log(x);
    this.getCatchedData();
  }

  getCatchedData(){
    const x = localStorage.getItem(this.key);
    console.log(x);
    return x;
  }


}
