import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bee-telegram-bar',
  templateUrl: './telegram-bar.component.html',
  styleUrls: ['./telegram-bar.component.scss']
})
export class TelegramBarComponent {
  @Output() emitClose: EventEmitter<any> = new EventEmitter<any>();
  myStorage = window.localStorage;

  constructor() { }

  closeTelegramBar() {
    this.emitClose.emit(false);
  }

  closeTelegramBarButton() {
    setTimeout(() => {
      let date = new Date();
      let expDate = JSON.stringify((date.getTime() / 1000) + 172800);
  
      this.myStorage.setItem('bn-registered', expDate);
      this.emitClose.emit(false);
    }, 3000);
  }
}
