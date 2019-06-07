import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {map} from 'rxjs/operators';
import { ActionSequence } from 'protractor';

export interface Product {name:string}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //coleccion firestore de carrito
  productsCollectionCarrito: AngularFirestoreCollection<Product>;
  carritoCollection: AngularFirestoreCollection<Product>;
  //observable para carrito
  carrito:Observable<Product[]>;

  //productsCollection: AngularFirestoreCollection<Product>;
  productsCollection: AngularFirestoreCollection<Product>;
  //productDoc:AngularFirestoreDocument<Product>;
  productDoc:AngularFirestoreDocument<Product> ;
  products:Observable<Product[]>;
  
  private itemDoc:AngularFirestoreDocument<Product>; 
  
  selectProduct: Product;//AUMENTE

constructor(public db:AngularFirestore) {

  //se da a producsCollection la ruta donde debera almacenar el producto para el carrito
    //para siguiente tarea habria que agregar el id usuario que cargara su carrito
    this.productsCollectionCarrito=this.db.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito/');
    this.productsCollection=this.db.collection('Products');
    
  this.carritoCollection=this.db.collection('usuarios/E9DZmcLPUxWRWHt5obtR/carrito');
  //alamcenamos la coleccion en el observable
  this.carrito=this.carritoCollection.valueChanges();
  
  //this.products=this.productsCollection.valueChanges();
    this.products=this.productsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Product;
        const id=a.payload.doc.id;
        return {id, ...data};
        //data.id=a.payload.doc.id;
        //return data;   
      })
    }))
    
  
  
 }

//metodo que retorna el nro de elementos del carrito
nroDocsCarrito(){
  return this.carrito;
 }

 //servicio que realiza la insercion del producto al carrito en la base de datos
 agregarCarrito(product: Product){
  console.log(product);
  console.log("Es de servicios");
  this.productsCollectionCarrito.add(product);

 }
 

 getProducts(){

   return this.products;
   
 }
 /*getProducts2(){
   return this.products;
 }*/
 addProduct(product: Product){
   //this.productsCollection.add(product);
  // this.products[0]=product;
   this.productsCollection.add(product);

 }
 getOfertas(): Observable <Product[]>{
   return this.db.collection<Product>('Products',ref=>ref.where('state','==','ofertas')).valueChanges();
 }
 getNuevos(): Observable <Product[]>{
  return this.db.collection<Product>('Products',ref=>ref.where('state','==','nuevo')).valueChanges();
}
  getCarrito(): Observable <Product[]>{
    return this.carritoCollection.valueChanges();
  }
  deleteProduct(product:Product)
  {
    this.productDoc=this.db.doc<Product>(`products/${product.id}`);
    this.productDoc.delete();   
  }
  updateProduct(product){
    this.productDoc=this.db.doc<Product>(`products/${product.id}`);
    this.productDoc.update(product);
  }
  deleteProduct3(p){

    this.itemDoc=this.db.doc<Product>(`products/${p.id}`);
    console.log(p);
    //this.db.doc<Product>('Products/'+id3).delete();
    //this.db.doc<Product>('products/'+id3).delete();
    //this.db.collection('products/id3').doc.d
    //this.db.firestore.doc(`product/`+id3).delete();
    this.itemDoc.delete();
  }
}
