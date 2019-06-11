import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ProductsService } from '../shared/models/products.service';

@NgModule({
  declarations: [CartDetailComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers :[ProductsService]
})
export class CartModule { }
