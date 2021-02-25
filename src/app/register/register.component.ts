import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
successMsg:string
errMsg:string
  registerForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private service:ServService) { 
  }

  ngOnInit(): void {
this.registerForm=this.fb.group({
"userName":['',[Validators.required]],
"password":['',[Validators.required,Validators.pattern(/[A-Z]+[a-z]+[0-9]+[@#$%^&*!]/)]],


"contact": ['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
"address": ['',[Validators.required,Validators.minLength(10)]],
"email": ['',[Validators.required,Validators.pattern(/^[a-z]+(@gmail.com)$/)]],
"dob": ['',this.datecheck], 
"gender":['',[]]
})

  }
datecheck(c:FormControl)
{
  let today=new Date().setUTCHours(0,0,0,0)
  let dob=new Date(c.value).setUTCHours(0,0,0,0)
  if(dob>=today)
  {
    return{dterr:{message:"DOB can't be greater than today's date"}}
  }
  else
  {
    return null;
  }
}

register()
{
  console.log(this.registerForm.value)
  this.successMsg=this.errMsg=null
  this.service.registerUser(this.registerForm.value).subscribe(
    data=>
    {
      this.successMsg=data.message
      alert(this.successMsg)
      this.router.navigate(["/login"])
    },
    err=>
    {
      this.errMsg=err.error.message
      this.router.navigate(["/register"])
    }
  )
}






  

}
