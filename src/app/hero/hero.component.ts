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
  private registrationDate: Date = new Date(2018, 0, 2, 12);
  private preSaleDate: Date = new Date(2018, 0, 19, 11, 59);
  private registration: boolean = false;
  private sale: boolean = false;
  private end: boolean = false; 

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
        if(this.end) countDown.unsubscribe();
        else this.handleCountDown();
      });
   }

  handleCountDown() {
    let now = new Date().getTime();
    let remainTime;
    if(!this.registration){
      remainTime = this.registrationDate.getTime() - now;
      if(remainTime <= 0) this.registration = true;
    }
    if(this.registration) {
      remainTime = this.preSaleDate.getTime() - now;
      if(remainTime <= 0) this.sale = true;
    }
    if(this.sale) {
      remainTime = this.preSaleDate.getTime() - now;
      if(remainTime <= 0) {
        this.end = true;
        return;
      }
    }

    let sec = Math.floor(remainTime / 1000);
    let min = Math.floor(sec / 60);
    let hr = Math.floor(min / 60);
    let days = Math.floor(hr / 24);
    hr %= 24;
    min %= 60;
    sec %= 60;
    
    this.hrs = hr < 10 ? '0' + hr : hr;
    this.min = min < 10 ? '0' + min : min;
    this.sec = sec < 10 ? '0' + sec : sec;
    this.days = days < 10 ? '0' + days: days;
  }

}
