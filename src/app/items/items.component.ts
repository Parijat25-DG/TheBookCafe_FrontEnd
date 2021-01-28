import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Items } from './items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items : any;
  searchQuality : string="";
  
  constructor(private service : ItemService) { 
    
  }

  ngOnInit(): void {
    this.service.getItems().subscribe(data=>this.items=data);
  }


}
