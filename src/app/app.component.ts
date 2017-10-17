import { Component, Inject, HostListener } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShown = true;
  isVisible = false;

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
}
