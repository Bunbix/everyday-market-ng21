import { Routes } from '@angular/router';
import { RegisterPageComponent } from './market/register-page/register-page.component';
import { ProductsPageComponent } from './market/products-page/products-page.component';

export const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];