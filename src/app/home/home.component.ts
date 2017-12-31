import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  isShown = true;
  isVisible = false;
  myStorage = window.localStorage;

  constructor(@Inject(DOCUMENT) private doc: Document) {
    PageScrollConfig.defaultDuration = 350;
    PageScrollConfig.defaultScrollOffset = 50;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ( number > 50 ) {
      this.isVisible = true;
    } else if (this.isVisible && number < 5) {
      this.isVisible = false;
    }
  }

  closeEmailBar(data) {
    this.isShown = data;
  }

  ngOnInit() {
    if (this.myStorage.getItem('bn-registered')) {
      var date = new Date();
      if (parseInt(this.myStorage.getItem('bn-registered')) < (date.getTime() / 1000)) {
        this.myStorage.removeItem('bn-registered');
      } else {
        this.isShown = false;
      }
    }
  }
}