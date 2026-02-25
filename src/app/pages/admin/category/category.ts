import { Component } from '@angular/core';
import { Productsclient } from '../../../services/productsclient';
import { CategoryModel } from '../../../models/category';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

  categories : CategoryModel[] = []
  isLoadingCategories: boolean = true;

  categories$!: Observable<CategoryModel[]>;

  constructor(private productscleint : Productsclient){
    console.log("Category component created");
    this.categories$ = this.productscleint.getAllCategoryObs();
    this.categories$.subscribe(c =>{
      this.categories = c
      this.isLoadingCategories = false;
    })
  }  

}
