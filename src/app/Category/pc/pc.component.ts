import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  pc$  : Observable<Product[]>;
  mostrarItem:any;
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.pc$=this.productsService.getPcs();
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