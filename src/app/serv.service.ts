import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'
import {User} from '../user'
@Injectable({
  providedIn: 'root'
})
export class ServService {
url:string
  constructor(private http:HttpClient) {

    this.url="http://localhost:4000/"

   }


registerUser(newUser:User):Observable<User>
{
console.log("reg serv")
return this.http.post(this.url+'register',newUser) as Observable<any>
}

}
