import { Component, OnInit } from '@angular/core';
import { Query } from '../query';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  query: Query = new Query("", "", "", "", "");
  message:any;

  constructor(private service:QueryService) { }

  ngOnInit(): void {
  }

  public saveQuery(){
    let resp = this.service.saveQuery(this.query);
    resp.subscribe((data)=>this.message=data)
  }


}
