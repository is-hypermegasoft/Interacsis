import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers :[ ProductService]
})
export class StoreModule { }
