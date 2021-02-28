import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input() products;
  @Input() choosencateg:string
  showDetail:boolean=false//dn write in init
  prodClicked=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.choosencateg)
    console.log(this.products)
    
  }
  showInfo(product)
  {
    this.showDetail=true;
    console.log("clicked",product)
    this.prodClicked.push(product)
    console.log(this.prodClicked)
  }
}



