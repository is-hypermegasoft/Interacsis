/*import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Product2 {name:string;
                       price:number;
                      category:string;
                       description:string;
                      state:string;
                      image:string;
                      id:string;}
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private products2Collection:AngularFirestoreCollection<Product2>;
  products2:Observable<Product2[]>;
  private product2Doc:AngularFirestoreDocument<Product2>;

  constructor(private afs:AngularFirestore) { 
      this.products2Collection=afs.collection<Product2>('products');
      //this.products2=this.products2Collection.valueChanges();
      this.products2=this.products2Collection.snapshotChanges().pipe(map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data() as Product2;
          const id=a.payload.doc.id;
          return {id, ...data};
        });
      }));
  }
  ListaItem(){
    return this.products2;
  }
  agregarItem(item:Product2){
    this.products2Collection.add(item);
  }
 //* eliminarItem(item){
    //this.product2Doc=this.afs.doc<Product2>(`products2/${this.products2.id}`);
    //this.itemDoc.delete();
  //}
  //EditarItem(item){
    //this.itemDoc=this.afs.doc<Product2>(`items/${item.id}`);
  //  this.itemDoc.update(item);
//  }


}*/
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item 
{ 
  name: string; 
  category: string;
  price: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  quantity: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionService 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsCollection2: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  products: Observable<Item[]>;
  
  private itemDoc: AngularFirestoreDocument<Item>;
  private itemDoc2: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) 
  {
    this.itemsCollection = afs.collection<Item>('items');
    //con esto estamos guardando todo lo que este dentro la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    //codigo para agregar a carrito
   this.itemsCollection2 = afs.collection<Item>('products');
    this.products = this.itemsCollection2.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  mostrarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    //this.itemDoc.update(item);
  }
  ListaItem()
  {
    return this.items;
  }

  agregarItem(item: Item)
  {
    this.itemsCollection.add(item);
  }

  agregarCarrito(product: Item)
  {
    this.itemsCollection2.add(product);
  }

  eliminarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }
  eliminarItemCariito(product)
  {
    this.itemDoc2 = this.afs.doc<Item>(`products/${product.id}`);
    this.itemDoc2.delete();
  }
  editarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}

