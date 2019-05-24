import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  gamer$  : Observable<Product[]>;
  constructor(private productsService: ProductService) { }

  ngOnInit() : void{

    this.gamer$=this.productsService.getGamer();
  }

}
