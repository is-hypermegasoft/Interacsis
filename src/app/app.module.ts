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
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { SearchbarComponent } from './layout/searchbar/searchbar.component';

import { HomeComponent } from './account/home/home.component';
import { LoginComponent } from './account/auth/login/login.component';
import { RegistrationComponent } from './account/auth/registration/registration.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AccesoriosComponent } from './Category/accesorios/accesorios.component';
import { LaptopsComponent } from './Category/laptops/laptops.component';
import { GamerComponent } from './Category/gamer/gamer.component';
import { PcComponent } from './Category/pc/pc.component';
import { PerifericosComponent } from './Category/perifericos/perifericos.component';

const routes: Routes=[
  {path:'product-form', component: ProductFormComponent },
  {path:'navbar', component:NavbarComponent},
  {path:'mensaje1', component:Mensaje1FormComponent},
  {path:'cart', component:CartDetailComponent},
  {path:'searchbar', component:SearchbarComponent}
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path: 'laptops',component:LaptopsComponent},
  {path: 'accesorios',component:AccesoriosComponent},
  {path:'gamer',component:GamerComponent},
  {path:'pc',component:PcComponent},
  {path: 'perifericos',component:PerifericosComponent }
]


@NgModule({
  declarations: [AppComponent,
    ProductFormComponent,
    Mensaje1FormComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CartDetailComponent,
    AccesoriosComponent,
    LaptopsComponent,
    GamerComponent,
    PcComponent,
    PerifericosComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule, AppRoutingModule,LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
