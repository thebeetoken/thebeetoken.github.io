import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bee-email-bar',
  templateUrl: './email-bar.component.html',
  styleUrls: ['./email-bar.component.scss']
})
export class EmailBarComponent {
  @Output() emitClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  closeEmailBar() {
    this.emitClose.emit(false);
  }

  enterPressed(key) {
    if (key.charCode === 13) {
      setTimeout(() => {
        this.emitClose.emit(false);
      }, 3000);
    }
  }

  closeEmailBarButton() {
    setTimeout(() => {
      this.emitClose.emit(false);
    }, 3000);
  }
}
