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

const routes: Routes=[
  {path:'product-form', component: ProductFormComponent },
  {path:'navbar', component:NavbarComponent},
]


@NgModule({
  declarations: [AppComponent, ProductFormComponent],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AppRoutingModule,LayoutModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
