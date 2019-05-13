import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductsService {
  constructor(private database: AngularFirestore) {}
  getProducts(): Observable <Product[]>{
    return this.database.collection<Product>('Products').valueChanges();
  }
  getCarrito(): Observable <Product[]> {
    return this.database.collection<Product>('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/').valueChanges();
  }

  removeProduct(product:Product){
    var deleteDoc = this.database.collection<Product>('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/').doc('product.id').delete();
  }

  getSize():number{
    return this.database.collection.length;
  }

}
