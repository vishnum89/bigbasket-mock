import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Products } from './pages/admin/products/products';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children:[
            {
                path:'products',
                component:Products
            }
        ]
    }
];
