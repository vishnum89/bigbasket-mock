import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './apiresponse';
import { Category } from '../models/category';

const headers = new HttpHeaders({
  'accept': 'application/json'
});

@Injectable({
  providedIn: 'root',
})
export class Productsclient {
  
  //uri = 'https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory';
  uri = "/api/BigBasket/GetAllCategory";

  

  constructor(private httpClient : HttpClient){}

  getAllCategory(){

    return this.httpClient.get<ApiResponse<Category[]>>(this.uri,{headers});

  }

}
