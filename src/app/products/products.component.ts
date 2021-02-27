import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input() products;
  @Input() choosencateg:string
  constructor() { }

  ngOnInit(): void {
    console.log(this.choosencateg)
    console.log(this.products)
  }

}
