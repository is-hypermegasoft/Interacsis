import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  accesorios$  : Observable<Product[]>;
  mostrarItem:any;
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.accesorios$=this.productsService.getAccesorios();
  }
  detalles(product)
  {
    this.mostrarItem = product
  }
  Carrito(product: Product){
    this.productsService.agregarCarrito(product);
    //this.carritoService.agregarCarrito(product);no funciona no puedo inyectar el servicio
  }
}