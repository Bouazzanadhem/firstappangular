import { Component, OnInit } from '@angular/core';
import {  AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MustMatch } from '@app/_helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
       
  submitted= false;
  // formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmpassword') };
  registerForm:  FormGroup = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    confirmemail: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.minLength(8)])
  });
  // ,this.formOptions
  constructor(public route: Router) {  }
  ngOnInit(): void {
  }
  register(){
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    // console.log(this.registerForm.value);
    let users= this.registerForm.value;
    let p =JSON.parse(localStorage.getItem("users") || '[]');
    p.push(users);
    localStorage.setItem("users",JSON.stringify(p));
    this.route.navigate(['/app-login'])
    
  }
  // password(formGroup: FormGroup){
  //   const {value: password } =  formGroup.get('password');
    
  // }
}
