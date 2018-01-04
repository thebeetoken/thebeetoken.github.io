import { Component } from '@angular/core';

@Component({
  selector: 'presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss']
})
export class PresaleComponent { 
  email: string = '';
  password: string = '';
  rePassword: string = '';
  validEmail: boolean = false;
  validPass: boolean = false;
  validRePass: boolean = false;
  emailErr: boolean = false;
  passErr: boolean = false;
  rePassErr: boolean = false;

  registered: boolean = false;

  validateForm(){
    this.validEmail = this.isEmailValid(this.email);
    this.validPass = this.isPasswordValid(this.password);
    this.validRePass = (this.password === this.rePassword);
    this.emailErr = !this.validEmail;
    this.passErr = !this.validPass;
    this.rePassErr = !this.validRePass;
    if(this.validEmail && this.validPass && this.validRePass){
      this.submitEmail();
    } else {
      return;
    }
  }
  submitEmail(){
    console.log("Handle api request");
    this.registered = true;
  }
  isEmailValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  isPasswordValid(password){
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  }
}