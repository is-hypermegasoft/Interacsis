import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFireModule} from '@angular/fire'
import{AngularFirestoreModule} from '@angular/fire/firestore'
import { LayoutModule} from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
//import {ProductsComponent} from './components/products/products.component';
import{NavbarComponent}from './layout/navbar/navbar.component';
import { Mensaje1FormComponent } from './mensaje1-form/mensaje1-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import {ProductService} from './services/product.service';//ULTIMO AUMENTO
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//ULTIMO AUMENTO
import {ToastrModule} from 'ngx-toastr';

const routes: Routes=[
  {path:'product-form', component: ProductFormComponent },
  {path:'navbar', component:NavbarComponent},
  {path:'mensaje1', component:Mensaje1FormComponent}
]


@NgModule({
  declarations: [AppComponent, ProductFormComponent, Mensaje1FormComponent, ProductsComponent, ProductListComponent, ProductComponent],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AppRoutingModule,LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
