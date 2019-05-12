import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products$  : Observable<Product[]>;
  products: Product[];
  
  mostrarItem:any
  constructor(private productsService: ProductsService) {}

  ngOnInit() :void {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);

    });
  }
  detalles(product): void
  {
    this.mostrarItem = product;
  }

}
