import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  declarations: [CartDetailComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
