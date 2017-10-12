import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'bee-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fixed = false;
  icon = '/assets/svg/hamburger.svg';
  isOpen = false;
  
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  @HostListener('window:scroll', []) onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ( number > 50 ) {
      this.fixed = true;
    } else if (this.fixed && number < 5) {
      this.fixed = false;
    }
  }

  ngOnInit() {
  }

  switchIcon() {
    if (this.icon === '/assets/svg/hamburger.svg') {
      this.icon = '/assets/svg/cross.svg';
      this.isOpen = true;
    } else {
      this.icon = '/assets/svg/hamburger.svg';
      this.isOpen = false;
    }
  }

  closeBurger() {
    this.isOpen = false;
    this.icon = '/assets/svg/hamburger.svg';
  }
}
