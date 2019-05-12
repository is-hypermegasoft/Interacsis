import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products$  : Observable<Product[]>;
  products: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit() :void {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);

    });
  }

  //metodo carrito que llama el servicio agregarCarrito enviando el producto observable
  Carrito(product: Product){
    this.productsService.agregarCarrito(product);
    //this.carritoService.agregarCarrito(product);no funciona no puedo inyectar el servicio
  }

}
