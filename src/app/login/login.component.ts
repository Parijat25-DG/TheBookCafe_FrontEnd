import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer: Customer = new Customer("","");
  message:any;

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }

  public loginUser(){
    let resp = this.service.loginCustomer(this.customer);
    resp.subscribe((data)=>this.message=data)
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
