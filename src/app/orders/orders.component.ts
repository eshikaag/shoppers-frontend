import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
email:string
errMsg:string
orders:any=[]
flag=false
  constructor(private service:ServService,private router:Router) { }

  ngOnInit(): void {

 this.email=sessionStorage.getItem('email')
this.service.getOrder(this.email).subscribe((data)=>
{
  this.flag=true
  console.log(data)
  this.orders=data
  console.log(this.orders[0].uOrders[0].orderProd[0].pid)
},
(error)=>
{
  this.errMsg=error.error.message
  this.router.navigate(['/login'])
})

  }

}
