import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Product } from 'src/app/models/product';
=======
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../../shared/models/products.service';
>>>>>>> ef7ec828cbcdcdb0f4bb6277b6fa74d433575cc4

import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products$  : Observable<Product[]>;
  //products: Product[];
  ofertas$:Observable<Product[]>;
  nuevos$:Observable<Product[]>;
  mostrarItem:any;
  constructor(private productsService: ProductService) {}

  ngOnInit() :void {
    /*this.products$ = this.productsService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);
<<<<<<< HEAD

    });*/
    this.products$=this.productsService.getProducts();
    this.ofertas$=this.productsService.getOfertas();
    this.nuevos$=this.productsService.getNuevos();
  }
  detalles(product)
  {
    this.mostrarItem = product
  }
  
  //metodo carrito que llama el servicio agregarCarrito enviando el producto observable
  Carrito(product: Product){
    this.productsService.agregarCarrito(product);
    //this.carritoService.agregarCarrito(product);no funciona no puedo inyectar el servicio
=======
    });
>>>>>>> ef7ec828cbcdcdb0f4bb6277b6fa74d433575cc4
  }

}
