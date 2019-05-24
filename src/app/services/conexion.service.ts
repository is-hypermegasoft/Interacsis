import { Injectable } from '@angular/core';
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
 /* eliminarItem(item){
    this.product2Doc=this.afs.doc<Product2>(`products2/${this.products2.id}`);
    this.itemDoc.delete();
  }
  EditarItem(item){
    this.itemDoc=this.afs.doc<Product2>(`items/${item.id}`);
    this.itemDoc.update(item);
  }*/


}
