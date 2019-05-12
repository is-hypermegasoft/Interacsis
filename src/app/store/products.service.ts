import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';

import  {} from '@angular/fire';

@Injectable()
export class ProductsService {

  constructor(private database: AngularFirestore) { }
  getProducts(): Observable <Product[]>{
    return this.database.collection<Product>('Products').valueChanges();
  
  }
  getOfertas(): Observable <Product[]>{
    return this.database.collection<Product>('Products',ref => ref.where('state','==','ofertas')).valueChanges();
  
  }
  getNuevos(): Observable<Product[]>{
    return this.database.collection<Product>('Products',ref => ref.where('state','==','nuevo')).valueChanges();
}
    }
    
  

