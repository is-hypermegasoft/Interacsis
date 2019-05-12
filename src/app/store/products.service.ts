import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class ProductsService {

  productsCollection: AngularFirestoreCollection<Product>;
  productDoc:AngularFirestoreDocument<Product>;
  products:Observable<Product[]>;
  carritoProductos: AngularFirestoreCollection;



  constructor(private database: AngularFirestore) {
    //se da a producsCollection la ruta donde debera almacenar el producto para el carrito
    //para siguiente tarea habria que agregar el id usuario que cargara su carrito
    this.productsCollection=this.database.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/');
   }
  getProducts(): Observable <Product[]>{
    
    return this.database.collection<Product>('Products').valueChanges();

  }

  
}
