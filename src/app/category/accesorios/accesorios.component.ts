import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductsService } from '../../store/products.service';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  accesorios$  : Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() :void {
    this.accesorios$=this.productsService.getAccesorios();
  }

}
