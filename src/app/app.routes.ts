import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Products } from './pages/admin/products/products';
import { Category } from './pages/admin/category/category';

export const routes: Routes = [
    {
      path: '',
      component: Layout,
      children: [
        { path: 'products', component: Products },
        { path: 'category', component: Category },
        { path: '', redirectTo: 'products', pathMatch: 'full' }
      ]
    },
    {
      path: 'login',
      component: Login
    }
  ];
  
