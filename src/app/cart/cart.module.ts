import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [CartDetailComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers :[ProductService]
})
export class CartModule { }
