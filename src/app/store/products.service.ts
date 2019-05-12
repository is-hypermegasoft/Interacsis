import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable()
export class ProductsService 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;
  
  constructor(private database: AngularFirestore) 
  { 
     
    this.itemsCollection = database.collection<Item>('items');
    //con esto estamos guardando todo lo que este dentro la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProducts(): Observable <Product[]>
  {
    return this.database.collection<Product>('Products').valueChanges();

  }

  mostrarItem(product)
  {
    this.itemDoc = this.database.doc<Item>(`items/${product.id}`);
    this.itemDoc.update(product);
  }
}
