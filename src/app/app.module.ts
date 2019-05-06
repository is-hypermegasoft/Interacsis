import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AngularFireModule} from '@angular/fire'
import{AngularFirestoreModule} from '@angular/fire/firestore'
import { LayoutModule} from './layout/layout.module';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AppRoutingModule,LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
