import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[];
  constructor(public productService:ProductService) { }

  ngOnInit() {
  }
  getProducts(){
    this.productService.getProducts().subscribe(products=>{
      this.products=products;
    });
  }

}
