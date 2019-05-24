import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './store/store.module#StoreModule'
<<<<<<< HEAD
} 

=======
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  }
>>>>>>> ef7ec828cbcdcdb0f4bb6277b6fa74d433575cc4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
