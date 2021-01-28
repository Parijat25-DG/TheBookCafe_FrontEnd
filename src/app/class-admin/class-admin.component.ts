import { Component, OnInit } from '@angular/core';
import { MasterClassService } from '../master-class.service';

@Component({
  selector: 'app-class-admin',
  templateUrl: './class-admin.component.html',
  styleUrls: ['./class-admin.component.css']
})
export class ClassAdminComponent implements OnInit {

  action:number;
  masterClasses:any;
  addMessage:any;
  deleteMessage:any;

  constructor(private service:MasterClassService) { }

  ngOnInit(): void {
    this.service.getMasterClasses().subscribe(data=>this.masterClasses=data);
  }

  public addClass(newClass:any){
    let resp = this.service.addMasterClass(newClass);
    resp.subscribe((data)=>this.addMessage=data)
  }

  public removeClass(aclass:any){
    let resp = this.service.removeMasterClass(aclass);
    resp.subscribe((data)=>this.deleteMessage=data)
  }

}
