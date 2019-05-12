import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../../shared/models/products.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  totalPrice: number;
  products$  : Observable<Product[]>;
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit():void {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }
  
  caculoTotal(product: Product): number{
    this.totalPrice = product.quantity * product.price;
    return this.totalPrice;
  }

  removeProduct(product:Product){
    this.productsService.removeProduct(product);
  }

}
