import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products : any;
searchDesc : string = "";

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>this.products=data);
  }

}

