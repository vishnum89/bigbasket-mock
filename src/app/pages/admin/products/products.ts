import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../models/product';
import { Productsclient } from '../../../services/productsclient';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
    isSidePanelVisible: boolean = false;
    productForm! : FormGroup;
    products : Product[];
    categories : Category[] = [];

    constructor(private fb:FormBuilder , private productsClient : Productsclient){
      this.products = [{
        productId: 1,
        productSku: 'SKU-001',
        productName: 'Green Tea Pack',
        productPrice: 299,
        productShortName: 'Tea',
        productDescription: 'Premium organic green tea.',
        createdDate: new Date().toISOString(),
        deliveryTimeSpan: '2 days',
        categoryId: 1,
        productImageUrl: 'https://via.placeholder.com/300x200',
        userId: 1
      }]
    }

    ngOnInit(){
      this.productForm = this.fb.group({
          productSku: ['', Validators.required],
          productName: ['', Validators.required],
          productShortName: [''],
          productPrice: [0, [Validators.required, Validators.min(1)]],
          categoryId: [null, Validators.required],
          productImageUrl: [''],
          productDescription: ['']
      });
      this.getAllCategory();
    }


    getAllCategory(){
      this.productsClient.getAllCategory().subscribe(res => {
           if(res.result){
            this.categories = res.data
           }
      })
    }

    viewSidePanel(){
      this.isSidePanelVisible = true;
    }

    closeSidePanel(){
      this.isSidePanelVisible = false;
    }

    onSave() {
      if (this.productForm.invalid) {
        return;
      }
      const productData = this.productForm.value;
      console.log(productData);

    }

    viewProduct(product: Product) {
      console.log(product);
    }


}
