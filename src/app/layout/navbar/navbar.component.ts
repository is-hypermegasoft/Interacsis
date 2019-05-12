import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';


@Component({
  selector: 'iso-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  nro:number;
  products$  : Observable<Product[]>;
  products: Product[];
  
  constructor(private productsService: ProductService) {

    
  }

  ngOnInit(): void{
    this.products$ = this.productsService.nroDocsCarrito();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);
      this.nro=this.products.length;
    });
    
    //let 

  }

 
 

}


