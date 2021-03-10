import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // profileForm = new FormGroup({
  //   number1: new FormControl(''),
  //   number2: new FormControl(''),
  // });
  // registerForm = new FormGroup({
  //   fname: new FormControl('',),
  //   lname: new FormControl(''),
  //   password: new FormControl(''),
  // });
  // constructor(
  //   public formBuilder: FormBuilder
  // ) {
  //   this.registerForm = this.formBuilder.group({
  //     fname: new FormControl('', Validators.compose([
  //       Validators.required
  //     ])),
  //     lname: new FormControl('',Validators.compose([
  //       Validators.required
  //     ])),
  //     email: new FormControl('',Validators.compose([
  //       Validators.required,
  //       Validators.email
  //     ])),
  //     password: new FormControl('',Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6)
  //     ])),
  //     confirmpassword: new FormControl('',Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6)
  //     ]))
  //   },{
  //     // Validators: this.password.bind(this)
  //   });
  // }
  registerForm:  FormGroup = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    confirmemail: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.minLength(8)])
  });
  constructor() {  }
  ngOnInit(): void {
  }
  register(){
    
  }
  // password(formGroup: FormGroup){
  //   const {value: password } =  formGroup.get('password');
    
  // }
  // affichage(){
    
  //   let x=this.profileForm.get("number1")?.value;
  //   let y=this.profileForm.controls["number2"].value;
  //   console.log(x+y);
  //   }

}
