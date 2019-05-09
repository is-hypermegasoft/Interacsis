import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductsService } from './products.service';
@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers :[ProductsService]
})
export class StoreModule { }
