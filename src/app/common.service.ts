import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private data=new BehaviorSubject(0)
obs=this.data.asObservable()
  constructor() { }

changeData(data:number)
{
  this.data.next(data)
}
}