import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../models/product';
import { Productsclient } from '../../../services/productsclient';
import { CategoryModel } from '../../../models/category';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
    isSidePanelVisible: boolean = false;
    productForm! : FormGroup;
    products : Product[] = [];
    categories : CategoryModel[] = [];
    isLoadingProducts: boolean = false;


    constructor(private fb:FormBuilder , 
      private productsClient : Productsclient,
      private cdr: ChangeDetectorRef){
    }

    ngOnInit(){
      this.productForm = this.fb.group({
          productSku: ['', Validators.required],
          productName: ['', Validators.required],
          productShortName: [''],
          productPrice: [0, [Validators.required, Validators.min(1)]],
          categoryId: [null, Validators.required],
          deliveryTimeSpan: [''],
          productImageUrl: [''],
          productDescription: ['']
      });
      this.getAllCategory();
      this.getAllProducts();
    }


    getAllCategory(){
      this.productsClient.getAllCategory().subscribe(res => {
           if(res.result){
            this.categories = res.data
           }
      })

      //this.productsClient.getAllCategory()
    }

    getAllProducts() {
      this.isLoadingProducts = true;
    
      this.productsClient.getAllProducts().subscribe({
        next: (res) => {

          console.log("FULL RESPONSE:", res);
          this.products = res?.result && res?.data ? res.data : [];
          this.isLoadingProducts = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.products = [];
          this.isLoadingProducts = false;
          this.cdr.detectChanges();
        }
      });
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

    saveProduct(){
      if (this.productForm.invalid) {
        this.productForm.markAllAsTouched();
        return;
      }
     
      const productData = this.productForm.value;

      this.productsClient.saveProduct(productData).subscribe({
        next : (res)=>{
          console.log('Saved successfully', res);
          this.productForm.reset();
          this.getAllProducts(); // optional refresh
        },
        error: (err) => {
          console.error('Error saving product', err);
        }
      }
      )

    }

}
