import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
//import { Product } from 'src/app/shared/models/product';
import { Product } from 'src/app/models/product';
import swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product={} as Product;
  constructor(
    public productService:ProductService,
    public toastr:ToastrService
    ) { }

  ngOnInit() {
  }
 addProduct()
 {
  /*if(this.product.name!=='' && this.product.description!=='' && this.product.price!=0 && this.product.state!=='')
  {
    console.log(this.product);
    this.productService.addProduct(this.product);
    this.product={} as Product;

    this.toastr.success('Succesful Operation', 'Producto registrado');
    
  }
  else{
    this.toastr.error('Error Operation','Error Operation');
  }*/
 
  if(this.product.name.length>=0 && this.product.description.length>=0 && this.product.price!=0 && this.product.state.length>=0 && this.product.image.length>=0)
    {
    console.log(this.product);
    this.productService.addProduct(this.product);
   // this.product={} as Product;

    this.toastr.success('Succesful Operation', 'Producto registrado');
   }
   else
   {
    this.toastr.error('Error Operation','Error Operation');
    //this.product={} as Product;
     
   }
    
 }
 //ojo ultimo
  resetForm(/*productForm:NgForm*/)
  {
     //if(productForm != null)
        //productForm.reset();
        this.productService.products=null;
  }

}
