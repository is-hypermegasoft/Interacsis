import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // products:Product[];
 products:any;
  //editingProduct: Product;
  editingProduct:any={name:'',
                      price:'',
                      category:'',
                      description:'',
                      image:'',
                      state:''};
  editing: boolean=false;
  list:Product[];
  constructor(public productService:ProductService) {
           this.productService.getProducts().subscribe(products=>{
             this.products=products;
           });

   }

  ngOnInit() {
    //this.productService.getProducts().subscribe(products=>{
      //console.log(products);
      //this.products=products;
   // });
    /*this.productService.getProducts().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()}as Product;
      })
    });*/
  }
  deleteProduct(event,product){
    if(confirm('Are you sure you want to delete it?')){
      this.productService.deleteProduct(product);
    }
    
  }
  editProduct(event,product){
    this.editingProduct=product;
    this.editing=!this.editing;

  }
  updateProduct(){
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct={} as Product;
    this.editing=false;

  }
} 
