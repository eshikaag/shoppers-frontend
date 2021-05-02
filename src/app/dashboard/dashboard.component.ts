import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { server } from 'typescript';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
slideShow:boolean;
specificProdShow:boolean;
searchKey:string='';
products:any=[]
searchShow=false
categSelected:string
errorMsg:string=null
categories=['Clothes','Shoes','Furniture']
  constructor(private serv:ServService,private router:Router) { }

  ngOnInit(): void {
    this.slideShow=true;
this.specificProdShow=false;
  }
images=['../../assets/clothesslider.jpg','../../assets/shoesslider.jpg','../../assets/furniture.jpg']

viewProdByCategory(choosenCategory:string)
{
  console.log(choosenCategory)
  this.slideShow=false;
  this.specificProdShow=true;
  if(choosenCategory)
  {
    this.products=[]
    this.categSelected=choosenCategory
    this.serv.getSpecificProd(choosenCategory).subscribe(data=>
    {
this.products=data;
console.log(this.products)
    },
    error=>
    {
      this.errorMsg=error.error.message;
    }
    )
  
  }
}
searchProducts(searchKey:string)
{
  this.serv.searchprod(searchKey).subscribe(data=>
    {
      this.products=[];
this.products=data;
this.searchShow=true;
this.slideShow=false;
  this.specificProdShow=false;
console.log(this.products)
    },
    error=>
    {
      this.errorMsg=error.error.message;
    }
    )
  // this.router.navigate(['/search/'+searchKey]);
}






}
