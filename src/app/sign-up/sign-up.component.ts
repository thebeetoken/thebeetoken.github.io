import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  retypePassword: string;

  emailError: string;
  passwordError: string;
  retypePasswordError: string;
  boxError: string;

  emailConfirmed: boolean;
  passwordConfirmed: boolean;
  retypePasswordConfirmed: boolean;
  box: boolean;

  constructor() { 
    this.email = '';
    this.password = '';
    this.retypePassword = '';

    this.emailError = 'Email entry is not valid!';
    this.passwordError = 'Password does not contain at least 1 uppercase letters, 1 lowercase letters, and 1 number!';
    this.retypePasswordError = 'Passwords do not match!';
    this.boxError = 'Please confirm that you have read the terms & conditions!';

    this.emailConfirmed = true;
    this.passwordConfirmed = true;
    this.retypePasswordConfirmed = true;
    this.box = false;
  }

  ngOnInit() { }

  registerEmail(){
    this.emailConfirmed = this.isEmailValid();
    this.passwordConfirmed = this.isPasswordValid(this.password);
    this.retypePasswordConfirmed = (this.password === this.retypePassword);
    if(this.emailConfirmed && this.passwordConfirmed && this.retypePasswordConfirmed && this.box){
      this.submitEmail();
    }
  }

  handleBox(){
    this.box = !this.box;
  }

  isEmailValid(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.email.toLowerCase());
  }

  isPasswordValid(str) {
    let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return reg.test(str);
  }
  
  submitEmail(){
    // API call here
    console.log("Do API CALL")
  }

}
