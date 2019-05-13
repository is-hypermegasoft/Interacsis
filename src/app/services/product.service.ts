import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  productDoc:AngularFirestoreDocument<Product>;
  products:Observable<Product[]>;
  selectProduct: Product;//AUMENTE

constructor(public db:AngularFirestore) {
  this.productsCollection=this.db.collection('Products');
  this.products=this.productsCollection.valueChanges();

 }
 getProducts(){
   return this.products;
 }
 addProduct(product: Product){
   //this.productsCollection.add(product);
  // this.products[0]=product;
   this.productsCollection.add(product);

 }
}
