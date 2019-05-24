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
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.laptops$=this.productsService.getLaptops();
  }

}
