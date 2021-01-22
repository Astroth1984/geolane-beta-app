import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { AnalyticsComponent } from './analytics/analytics.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { ChartsModule } from 'ng2-charts';

import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategorieDetailComponent } from './categorie-detail/categorie-detail.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { ProductSiezeComponent } from './charts/product-sieze/product-sieze.component';

/*import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";*/

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
    AnalyticsComponent,
    WordCloudComponent,
    NavComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CategoriesComponent,
    CategorieEditComponent,
    CategorieDetailComponent,
    CategorieAddComponent,
    DashComponent,
    CardComponent,
    MiniCardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    ProductSiezeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ChartsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
