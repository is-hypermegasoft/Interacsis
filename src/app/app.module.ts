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

const routes: Routes=[
  {path:'product-form', component: ProductFormComponent },
]


@NgModule({
  declarations: [AppComponent, ProductFormComponent],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AppRoutingModule,LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
