import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hi');
    window.location.href = 'https://www.google.com';
  }
}
