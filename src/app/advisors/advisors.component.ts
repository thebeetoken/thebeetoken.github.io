import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss']
})
export class AdvisorsComponent implements OnInit {
  isExpanded: boolean;
  
  
  constructor() { }

  ngOnInit() {
    this.isExpanded = false;
  }

  showMore() {
    this.isExpanded = true;
  }
}
