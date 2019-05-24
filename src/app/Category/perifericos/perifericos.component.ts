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
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.perifericos$=this.productsService.getPerifericos();
  }

}
