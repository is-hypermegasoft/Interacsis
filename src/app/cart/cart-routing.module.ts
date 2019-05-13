import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CartDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
