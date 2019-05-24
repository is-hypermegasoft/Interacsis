import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent implements OnInit {
    perifericos$  : Observable<Product[]>;
    mostrarItem:any;
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.perifericos$=this.productsService.getPerifericos();
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
