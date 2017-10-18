import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent  { 
  myStorage = window.localStorage;

  enterPressed(key) {
    if (key.charCode === 13) {
      setTimeout(() => {
        let date = new Date();
        let expDate = JSON.stringify((date.getTime() / 1000) + 172800);
    
        this.myStorage.setItem('bn-registered', expDate);
      }, 3000);
    }
  }

  closeEmailBarButton() {
    setTimeout(() => {
      let date = new Date();
      let expDate = JSON.stringify((date.getTime() / 1000) + 172800);
  
      this.myStorage.setItem('bn-registered', expDate);
    }, 3000);
  }
}
