import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { Observable } from 'rxjs';

@Component({
  selector: 'bee-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public disappear: boolean = false; 
  private days: any;
  private hrs: any;
  private min: any;
  private sec: any;
  private sale: boolean = (this.days === 0 && this.hrs === 0 && this.min === 0 && this.sec === 0)

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ( number > 50 ) {
      this.disappear = true;
    } else if (this.disappear && number < 5) {
      this.disappear = false;
    }
  }
  ngOnInit() {
    this.handleCountDown();
    let countDown = Observable
      .interval(1000)
      .subscribe(() => {
        if(this.sale) countDown.unsubscribe();
        else this.handleCountDown()
      });
   }

  handleCountDown() {
    let now = new Date().getTime();
    let eventDate = new Date(2018, 0, 12).getTime();
    let remainTime = eventDate - now;
    let sec = Math.floor(remainTime / 1000);
    let min = Math.floor(sec / 60);
    let hr = Math.floor(min / 60);
    this.days = Math.floor(hr / 24);
    hr %= 24;
    min %= 60;
    sec %= 60;
  
    this.hrs = hr < 10 ? '0' + hr : hr;
    this.min = min < 10 ? '0' + min : min;
    this.sec = sec < 10 ? '0' + sec : sec;
  }

}
