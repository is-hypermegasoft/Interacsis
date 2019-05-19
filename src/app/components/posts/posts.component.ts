import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  product=[];
  constructor(public productService:ProductService) { 
    
  }

 filterPost='';
 //posts contiene el arreglo de Strings fijo, pero se desea implementar que posts contenga todos los documentos de productos
 //y entonces hacer la busqueda sobre esos documentos
 posts=[
    {
      "id":1,
      "name":"Post One"

    },
    {
      "id":2,
      "name":"Post Two"
    }

  ];
 // products:Observable<Product[]>;
  //filterPost:Observable<Product[]>;
  //product=this.productService.getProducts();
 //filterPost=this.productService.getProducts();
 /*posts=this.productService.getProducts().subscribe(product=>{
   this.product=product;
 });*/
  ngOnInit() {
  
    
  }

}
