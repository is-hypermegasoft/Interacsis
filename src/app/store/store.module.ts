import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
<<<<<<< HEAD
import { ProductService } from 'src/app/services/product.service';

=======
import { ProductsService } from '../shared/models/products.service';
>>>>>>> ef7ec828cbcdcdb0f4bb6277b6fa74d433575cc4
@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
<<<<<<< HEAD
  providers :[ ProductService]
=======
  providers :[ProductsService]
>>>>>>> ef7ec828cbcdcdb0f4bb6277b6fa74d433575cc4
})
export class StoreModule { }
