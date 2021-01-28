import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartList } from '../cartList';
import { OrderSubmitService } from '../order-submit.service';
import { RetriveCartService } from '../retrive-cart.service';
import { Selection } from '../selection';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  selection:any;
  cartId:number = 1;
  message:any;
  idx:number;
  modes: any; 
  selectedMode:string='';

  constructor(private service:RetriveCartService, 
  private orderService:OrderSubmitService) { }

  ngOnInit(): void {
    this.modes= [
      {id:1,name:"Credit/Debit Card"},
      {id:2,name:"Cash"},
      {id:3,name:"Google Pay UPI"}
    ];
    this.service.retrieveCart(this.cartId).subscribe(data=>this.selection=data);
  }

  public submitOrder(paymentMode:number){
    console.log(paymentMode);
    this.selection.paymentMode=paymentMode;
    let resp = this.orderService.submitOrder(this.selection);
    resp.subscribe((data)=>this.message=data)
  }

  public removeEntry(id:number){
    console.log(id);
    this.service.removeEntry(this.cartId,id).subscribe(data=>this.selection=data);
  }

}
