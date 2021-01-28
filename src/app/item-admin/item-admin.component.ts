import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.css']
})
export class ItemAdminComponent implements OnInit {

  action:number;
  items:any;
  addMessage:any;
  deleteMessage:any;

  constructor(private service:ItemService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(data=>this.items=data);
  }

  public addItem(newItem:any){
    let resp = this.service.addItem(newItem);
    resp.subscribe((data)=>this.addMessage=data)
  }

  public removeItem(item:any){
    let resp = this.service.removeItem(item);
    resp.subscribe((data)=>this.deleteMessage=data)
  }
}
