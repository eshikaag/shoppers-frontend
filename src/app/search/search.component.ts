import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
searchElem="";
prod=[]
errorMessage=""
  constructor(private aroute:ActivatedRoute,private ser:ServService) {   console.log("searchhhhhh")}

  ngOnInit(): void {
this.aroute.params.subscribe(
  (params)=>
  {
    this.searchElem=params.searchKey
    console.log(this.searchElem)
    this.searchFn(this.searchElem)
  } 
)
  }
searchFn(a)
{
this.prod=[];
this.ser.searchprod(a).subscribe(data=>
  {
    this.prod=data
    console.log(this.prod);
  },
  err=>
  {
  this.errorMessage=err.error.message;
  }
  )



  }

}
