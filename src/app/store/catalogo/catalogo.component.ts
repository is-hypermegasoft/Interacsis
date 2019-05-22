import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductsService } from '../products.service';
//import { ProductService } from 'src/app/services/product.service';
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
  constructor(private productsService: ProductsService) {}

  ngOnInit() :void {
    /*this.products$ = this.productsService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);

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
  }

    }