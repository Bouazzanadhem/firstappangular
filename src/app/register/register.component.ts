import { Component, OnInit } from '@angular/core';
import {  AbstractControl, AbstractControlOptions, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
    fname: new FormControl('',[Validators.required, this.forbiddenNameValidator(/admin/)]),
    lname: new FormControl('',[Validators.required,this.forbiddenNameValidator(/admin/)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    confirmemail: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  },{
    validators: [this.passwordValidator , this.emailValidator]
  });
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
  emailValidator(group:AbstractControl):{[key:string]:boolean} | null{
    const email = group.get('email');
    const confirmemail = group.get('confirmemail');
    if (email?.pristine || confirmemail?.pristine){
      return null;
    }
    return email && confirmemail && email.value !== confirmemail.value ?
    {'misMatch1': true } :
    null ;
  }
  passwordValidator(group: AbstractControl):  {[key:string]:boolean} | null{
    const  password  =  group.get('password');
    const confirmPassword  = group.get('confirmpassword');
    console.log(password?.value , confirmPassword?.value);
    if (password?.pristine || confirmPassword?.pristine){
      return null ;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
    {'misMatch': true } :
    null ;
  }

  forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control:AbstractControl): {[key:string]:any} | null => {
      const forbidden = forbiddenName.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

}
