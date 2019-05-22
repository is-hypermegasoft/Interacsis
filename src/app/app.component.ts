import { Component } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='sweetalert';
 añadido(){
   const toast=swal.mixin({
     toast:true,
     position:'top-end',
     showConfirmButton:false,
     timer:2500
   })
    
 }
}

