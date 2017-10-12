import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    PageScrollConfig.defaultDuration = 350;
    PageScrollConfig.defaultScrollOffset = 50;
  }
}
