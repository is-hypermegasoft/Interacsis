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
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.accesorios$=this.productsService.getAccesorios();
  }

}