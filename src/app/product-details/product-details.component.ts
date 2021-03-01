import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() prodDet;

  constructor(private router:Router,private service:ServService) { }

  ngOnInit(): void {
    console.log(this.prodDet)
  }


addItem(prod)
{
  let email=sessionStorage.getItem('email')
  
  if(email)
  {
    console.log(email)
    console.log(prod)
    this.service.addItem(prod,email).subscribe(data=>
      {
        console.log(email)
        console.log(data.message)
        this.router.navigate(['/cart'])
      })
  }
  else
  {
    this.router.navigate(['/login'])
  }
}

}
