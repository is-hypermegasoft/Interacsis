import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductsService {

  constructor(private database: AngularFirestore) { }
  getProducts(): Observable <Product[]>{
    return this.database.collection<Product>('Products').valueChanges();
  }

  removeProduct(product:Product){
    this.database.doc(`product`).delete();
  }

}
