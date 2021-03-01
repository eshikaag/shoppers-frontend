import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  pCount:number
  email:string
  userProd:any[]=[]
  cartTotal:number=0//imp to initialize
  amountPayable:number
  total:number=0
  newData()
  {
    this.common.changeData(this.userProd.length)
  }
  constructor(private service:ServService,private common:CommonService,private router:Router) { }

  ngOnInit(): void {
   this.common.obs.subscribe((res)=>{this.pCount=res})
   this.email=sessionStorage.getItem('email')
   if(history.state.data)
   {
     this.pCount=history.state.data.pCount
   }
   console.log("ngonit cart")
   this.service.getAllProd(this.email).subscribe(
     (res)=>
     {
       console.log("get all prod")
       this.userProd=[...res]
       this.userProd.forEach((elem)=>
       {
         console.log(elem.price)
         console.log(elem.userCustomQuantity)
         this.total+=elem.price*elem.userCustomQuantity
         this.cartTotal+=((elem.price-((elem.price)*(elem.pDiscount)))*elem.userCustomQuantity)
         console.log(this.cartTotal)
       })
       
       this.cartTotal=Math.round(this.cartTotal)
       console.log(this.cartTotal)
       this.amountPayable=Math.round(this.cartTotal+150)
       console.log(res,this.cartTotal)
       this.newData()
     }
   ) 
  }

updateQuantity(pid,quantity)
{
  const email=sessionStorage.getItem('email')
  this.service.updateProdQuantity(pid,email,quantity).subscribe(
    (res)=>
    {
      this.userProd=[...res]
      this.cartTotal=0
      this.total=0
      this.userProd.forEach((elem)=>
      {
       
        console.log(elem.price)
        console.log(elem.userCustomQuantity)
        this.total+=elem.price*elem.userCustomQuantity
        this.cartTotal+=((elem.price-((elem.price)*(elem.pDiscount)))*elem.userCustomQuantity)
        
      })
      this.cartTotal=Math.round(this.cartTotal)
      this.amountPayable=Math.round(this.cartTotal+150)
    },
    (err)=>
    {
      alert(err.error.message)
    }
  )
}

removeProd(pid)
{
  const email=sessionStorage.getItem('email')
  this.service.removeProduct(pid,email).subscribe(
    (res)=>
    {
      this.userProd=[...res]
      this.cartTotal=0
      this.userProd.forEach((elem)=>
      {
        console.log(elem.price)
         console.log(elem.userCustomQuantity)
        
         this.total+=elem.price*elem.userCustomQuantity
         this.cartTotal+=((elem.price-((elem.price)*(elem.pDiscount)))*elem.userCustomQuantity)
         
      })
      this.cartTotal=Math.round(this.cartTotal)
      this.amountPayable=Math.round(this.cartTotal*150)
      this.newData()
    },
    (err)=>
    {
      alert(err.error.message)
    }
  )
}
}
