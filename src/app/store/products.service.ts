import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

import {Product} from '../models/product';
import {map} from 'rxjs/operators';

export interface Item { name: string;}

@Injectable()
export class ProductsService 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

    //coleccion firestore de carrito
    productsCollectionCarrito: AngularFirestoreCollection<Product>;
    carritoCollection: AngularFirestoreCollection<Product>;
    //observable para carrito
    carrito:Observable<Product[]>;
    productsCollection: AngularFirestoreCollection<Product>;
    productDoc:AngularFirestoreDocument<Product>;
    products:Observable<Product[]>;
    selectProduct: Product;//AUMENTE

  constructor(private database: AngularFirestore) 
  { 
    //se da a producsCollection la ruta donde debera almacenar el producto para el carrito
    //para siguiente tarea habria que agregar el id usuario que cargara su carrito
    this.productsCollectionCarrito=this.database.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/');
  this.productsCollection=this.database.collection('Products');
  this.products=this.productsCollection.valueChanges();
  this.productsCollection=this.database.collection('Products');
  this.products=this.productsCollection.valueChanges();
  //almacenamos toda la coleccion del carrito
  this.carritoCollection=this.database.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito');
  //alamcenamos la coleccion e el observable
  //this.carrito=this.carritoCollection.valueChanges();
  this.carrito=this.carritoCollection.snapshotChanges().pipe(
    map( actions => actions.map(a=> {
      const data = a.payload.doc.data() as Item;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  )
  }
  getProducts(): Observable <Product[]>{
    return this.database.collection<Product>('Products').valueChanges();

  }
  getOfertas(): Observable <Product[]>{
    return this.database.collection<Product>('Products',ref=>ref.where('state','==','ofertas')).valueChanges();
  }
  getNuevos(): Observable <Product[]>{
   return this.database.collection<Product>('Products',ref=>ref.where('state','==','nuevo')).valueChanges();
 }

 //servicio que realiza la insercion del producto al carrito en la base de datos
 agregarCarrito(product: Product){
  console.log(product);
  console.log("Es de servicios");
  this.productsCollectionCarrito.add(product);

 }

 //metodo que retorna el nro de elementos del carrito
nroDocsCarrito(){
  return this.carrito;
 }
 mostrarItem(product)
 {
  this.itemDoc = this.database.doc<Item>(`items/${product.id}`);
  this.itemDoc.update(product);
 }
}
