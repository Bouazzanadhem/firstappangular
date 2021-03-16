import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(private route: Router) { }
  users:any[]=[]
  ngOnInit(): void {
    console.log("bonjour");
    this.users=JSON.parse(localStorage.getItem("users") || '[]');
    // console.log(this.users);
    
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    // console.log(this.loginForm.value);
    let user=this.users.find(x => x.email == this.loginForm.value.email && x.password == this.loginForm.value.password)
    console.log(user);
    if (user == undefined){
      alert('verifier votre information')
    }else{
      localStorage.setItem("user-connected",JSON.stringify(user));
    }
    // this.route.navigate(['/register'])
     this.route.navigateByUrl('/register')

    
  }
  
}