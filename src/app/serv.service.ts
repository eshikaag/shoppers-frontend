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
loginUser(newUser:User):Observable<User>
{
console.log("login serv")
return this.http.post(this.url+'login',newUser) as Observable<any>
}

getSpecificProd(choosenCategory):Observable<any>
{
  console.log("categ is",choosenCategory)
  return  this.http.get(this.url+'categoryproducts/'+choosenCategory)
}
addItem(prod,email):Observable<any>
{
  console.log("in prod det serv")
  console.log(this.url+'addItem/'+email)
  return this.http.post(this.url+'addItem/'+email,prod)
}
getAllProd(email):Observable<any>
{
  return this.http.get<any>(this.url+"getAllProducts/"+email)
}

updateProdQuantity(pid,email,quantity):Observable<any>
{
  console.log("upd",pid)
  return this.http.put(this.url+"updateQuantity",{pid,email,quantity}) as Observable<any>//giving all this as body
}

removeProduct(pid,email):Observable<any>
{
  return this.http.delete(this.url+'removeProduct/'+email+"/"+pid) as Observable<any>
}

}
