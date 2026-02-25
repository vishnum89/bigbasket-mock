import { HttpClient, HttpHeaders } from '@angular/common/http';
import { COMPILER_OPTIONS, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { ApiResponse } from './apiresponse';
import { CategoryModel } from '../models/category';
import { Product } from '../models/product';
import { CategoryObj } from '../models/categoryobj';

const headers = new HttpHeaders({
  'accept': 'application/json'
});

@Injectable({
  providedIn: 'root',
})
export class Productsclient {

  private products$!: Observable<ApiResponse<Product[]>>;
  public categoryObservable = new BehaviorSubject<CategoryObj[]>([]);

  
  //uri = 'https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory';
  uri = "/api/BigBasket/GetAllCategory";
  getAllProductsUri = '/api/BigBasket/GetAllProducts'
  createProductUri = '/api/BigBasket/CreateProduct'
  

  constructor(private httpClient : HttpClient){}

  getAllCategory(){
    return this.httpClient.get<ApiResponse<CategoryModel[]>>(this.uri,{headers});
  }

  getAllCategoryObs(){

    return this.httpClient
    .get<ApiResponse<CategoryObj[]>>(this.uri)
    .pipe(map(res => res.data));
  }

  getAllProducts() {

    if (!this.products$) {
      this.products$ = this.httpClient
        .get<ApiResponse<Product[]>>(this.getAllProductsUri, { headers })
        .pipe(shareReplay(1));
    }
  
    return this.products$;
  }

  saveProduct(product: Product){
    return this.httpClient
    .post<ApiResponse<Product>>(this.createProductUri , product, {headers})
    .pipe(map(res => res.data))
  }

}
