import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Products
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
//Dashboard
import { AnalyticsComponent } from './analytics/analytics.component';
//Customers
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
//Categories
import { CategoriesComponent } from './categories/categories.component';
import { CategorieDetailComponent } from './categorie-detail/categorie-detail.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
//Dashboard
import { DashComponent } from './dash/dash.component';




const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Add Product' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Edit Product' }
  },
  {
    path: 'product-analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics Product' }
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'List of Customers' }
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'customer-add',
    component: CustomerAddComponent,
    data: { title: 'Add Customer' }
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
    data: { title: 'Edit Customer' }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'List of Categories' }
  },
  {
    path: 'categorie-details/:id',
    component: CategorieDetailComponent,
    data: { title: 'Categorie Details' }
  },
  {
    path: 'categorie-add',
    component: CategorieAddComponent,
    data: { title: 'Add Categorie' }
  },
  {
    path: 'categorie-edit/:id',
    component: CategorieEditComponent,
    data: { title: 'Edit Categorie' }
  },
  { path: 'dashboard', component: DashComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
