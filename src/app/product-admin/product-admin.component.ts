import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  action:number;
  products:any;
  addMessage:any;
  deleteMessage:any;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>this.products=data);
  }

  public addProduct(newProduct:any){
    let resp = this.service.addProduct(newProduct);
    resp.subscribe((data)=>this.addMessage=data)
  }

  public removeProduct(product:any){
    let resp = this.service.removeProduct(product);
    resp.subscribe((data)=>this.deleteMessage=data)
  }

}
