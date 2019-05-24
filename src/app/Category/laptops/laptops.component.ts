import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops$  : Observable<Product[]>;
  mostrarItem:any;
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.laptops$=this.productsService.getLaptops();
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
