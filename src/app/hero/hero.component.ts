import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'bee-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public disappear: boolean = false; 
  
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  @HostListener("window:scroll", []) onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ( number > 50 ) {
      this.disappear = true;
    } else if (this.disappear && number < 5) {
      this.disappear = false;
    }
  }
  ngOnInit() {
  }

}
