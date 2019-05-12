import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products$  : Observable<Product[]>;
  ofertas$ : Observable<Product[]>;
  nuevos$ : Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() :void {
    
    this.products$ = this.productsService.getProducts();
    this.ofertas$ = this.productsService.getOfertas();  
    this.nuevos$ = this.productsService.getNuevos();
  };
     
    
    

    }