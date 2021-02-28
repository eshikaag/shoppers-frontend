import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMsg:string
  errMsg:string
    loginForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private service:ServService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      "email": ['',[Validators.required,Validators.pattern(/^[a-z]+(@gmail.com)$/)]],
      "password":['',[Validators.required,Validators.pattern(/[A-Z]+[a-z]+[0-9]+[@#$%^&*!]/)]]
  })
}
  login()
  {
    console.log(this.loginForm.value)
    this.successMsg=this.errMsg=null
    this.service.loginUser(this.loginForm.value).subscribe(
      data=>
      {
        this.successMsg=data.message
        console.log("email from form",this.loginForm.value.email)
        sessionStorage.setItem('email',this.loginForm.value.email)
        alert(this.successMsg)
        console.log(sessionStorage.getItem('email'))
        this.router.navigate(["/dashboard"])
      },
      err=>
      {
        this.errMsg=err.error.message
        this.router.navigate(["/register"])
    }
    )
  }
}