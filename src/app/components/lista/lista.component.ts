/*import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../../services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  items:any;
  editarItem:any={name:'',
                  price:'',
                  category:'',
                  description:'',
                  state:'',
                  image:'' };

  constructor(private conexion:ConexionService) {
       this.conexion.ListaItem().subscribe(item=>{
             this.items=item;
       })

   }

  ngOnInit() {
  }

  //eliminar(item){
    //this.conexion.eliminarItem(item);
  //}
  //editar(item){
    //this.editarItem=item;
  // }
  //agregarItemEditado(){
    //this.conexion.EditarItem(this.editarItem);
  //}

}*/
import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Item 
{ 
  name: string; 
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;
  //products: Observable<any[]>;
  constructor(private afs: AngularFirestore, private service: ConexionService) 
  {
    //this.products = db.collection('products').valueChanges();
    this.itemsCollection = afs.collection<Item>('products');
    //con esto estamos guardando todo lo que este dentro la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit() {
  }
  eliminar(product)
  {
    const Swal = require('sweetalert2')
    Swal.fire({
      title: 'Esta seguro de Borrar este Producto?',
      text: "porque  se Borraran de la base de datos!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
      this.service.eliminarItemCariito(product);
      Swal.fire(
        'Eliminación Exitosa!  ',
        'Muy Bien',
        'success'
        )
      }
    })
  }

}

