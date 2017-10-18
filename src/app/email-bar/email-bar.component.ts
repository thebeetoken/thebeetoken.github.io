import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bee-email-bar',
  templateUrl: './email-bar.component.html',
  styleUrls: ['./email-bar.component.scss']
})
export class EmailBarComponent {
  @Output() emitClose: EventEmitter<any> = new EventEmitter<any>();
  myStorage = window.localStorage;

  constructor() { }

  closeEmailBar() {
    this.emitClose.emit(false);
  }

  enterPressed(key) {
    if (key.charCode === 13) {
      setTimeout(() => {
        let date = new Date();
        let expDate = JSON.stringify((date.getTime() / 1000) + 172800);
    
        this.myStorage.setItem('bn-registered', expDate);
        this.emitClose.emit(false);
      }, 3000);
    }
  }

  closeEmailBarButton() {
    setTimeout(() => {
      let date = new Date();
      let expDate = JSON.stringify((date.getTime() / 1000) + 172800);
  
      this.myStorage.setItem('bn-registered', expDate);
      this.emitClose.emit(false);
    }, 3000);
  }
}
