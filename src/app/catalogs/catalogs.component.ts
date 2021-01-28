import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Catalog } from '../catalog';
import { ItemService } from '../item.service';
import { MasterClassService } from '../master-class.service';
import { ProductService } from '../product.service';
import { ReadingClubService } from '../reading-club.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  catalogs:Catalog[];
  catalogSelected:Number;
  selectedValue:string;

  books:any;
  items:any;
  products:any;
  readingClubs:any;
  masterClasses:any;

  cart:Cart;
  message:any;

  constructor(private bookService:BookService, private productService:ProductService, 
    private itemService:ItemService, private readingClubService:ReadingClubService, 
    private masterClassService:MasterClassService, private cartService:CartService) { }

  ngOnInit(): void {
    this.catalogs = [
        {id:1,name:"--- Select to View ---"},
        {id:2,name:"Products"},
        {id:3,name:"Items"},
        {id:4,name:"Books"},
        {id:5,name:"Reading Club"},
        {id:6,name:"Master Class"}
    ];
    this.catalogSelected=1;
    this.bookService.getBooks().subscribe(data=>this.books=data);
    this.productService.getProducts().subscribe(data=>this.products=data);
    this.itemService.getItems().subscribe(data=>this.items=data);
    this.readingClubService.getReadingClubs().subscribe(data=>this.readingClubs=data);
    this.masterClassService.getMasterClasses().subscribe(data=>this.masterClasses=data);
  }

  onOptionSelected(val:any){
    this.customFunction(val);
  }

  customFunction(val:any)
  {
    this.selectedValue="Here is our list of "+val;
  }

  public addBooks(bookId:number,quantity:number){
    console.log(bookId);
    console.log(quantity);
    this.cart={cartId:1,userId:1, bookId:bookId, bookQuantity:1,productId:0,
      productQuantity:0, itemId:0, itemQuantity:0, clubId:0, clubQuantity:0, classId:0, classQuantity:0};
    this.saveCart(this.cart);
  }
  public addProducts(productId:number,quantity:number){
    console.log(productId);
    console.log(quantity);
    this.cart={cartId:1,userId:1, bookId:0, bookQuantity:0,productId:productId,
      productQuantity:1, itemId:0, itemQuantity:0, clubId:0, clubQuantity:0, classId:0, classQuantity:0};
    this.saveCart(this.cart);
  }
  public addItems(itemId:number,quantity:number){
    console.log(itemId);
    console.log(quantity);
    this.cart={cartId:1,userId:1, bookId:0, bookQuantity:0,productId:0,
      productQuantity:0, itemId:itemId, itemQuantity:1, clubId:0, clubQuantity:0, classId:0, classQuantity:0};
    this.saveCart(this.cart);
  }
  public addClub(clubId:number,quantity:number){
    console.log(clubId);
    console.log(quantity);
    this.cart={cartId:1,userId:1, bookId:0, bookQuantity:0,productId:0,
      productQuantity:0, itemId:0, itemQuantity:0, clubId:clubId, clubQuantity:1, classId:0, classQuantity:0};
    this.saveCart(this.cart);
  }
  public addClass(classId:number,quantity:number){
    console.log(classId);
    console.log(quantity);
    this.cart={cartId:1,userId:1, bookId:0, bookQuantity:0,productId:0,
      productQuantity:0, itemId:0, itemQuantity:0, clubId:0, clubQuantity:0, classId:classId, classQuantity:1};
    this.saveCart(this.cart);
  }

  public saveCart(cart:any){
    let resp = this.cartService.saveCart(this.cart);
    resp.subscribe((data)=>this.message=data)
  }


}
