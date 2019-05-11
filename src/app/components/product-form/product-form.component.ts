import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
//import { Product } from 'src/app/shared/models/product';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product={} as Product;
  constructor(public productService:ProductService) { }

  ngOnInit() {
  }
 addProduct()
 {
  if(this.product.name!=='' && this.product.description!=='' && this.product.price!==0 && this.product.state!=='')
  {
    console.log(this.product);
    this.productService.addProduct(this.product);
    //this.product={} as Product;
  }
 }

}
