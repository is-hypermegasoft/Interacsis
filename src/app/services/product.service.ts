import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestoreModule} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  productsCollection: AngularFirestoreCollection<Product>;
  //coleccion firestore de carrito
  productsCollectionCarrito: AngularFirestoreCollection<Product>;
  carritoCollection: AngularFirestoreCollection<Product>;

  productDoc:AngularFirestoreDocument<Product>;
  products:Observable<Product[]>;
  carrito:Observable<Product[]>;

constructor(public db:AngularFirestore) {
  //se da a producsCollection la ruta donde debera almacenar el producto para el carrito
    //para siguiente tarea habria que agregar el id usuario que cargara su carrito
    this.productsCollectionCarrito=this.db.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/');

  this.productsCollection=this.db.collection('Products');
  this.products=this.productsCollection.valueChanges();
  //almacenamos toda la coleccion del carrito
  this.carritoCollection=this.db.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito');
  //alamcenamos la coleccion en el observable
  this.carrito=this.carritoCollection.valueChanges();
 }

 getProducts(){
   return this.products;
 }

 nroDocsCarrito(){
  return this.carrito;
 }

 addProduct(product: Product){
   //this.productsCollection.add(product);
  // this.products[0]=product;
   this.productsCollection.add(product);

 }

 //servicio que realiza la insercion del producto a la base de datos
 agregarCarrito(product: Product){
  console.log(product);
  console.log("Es de servicios");
  this.productsCollectionCarrito.add(product);

 }

  
}
