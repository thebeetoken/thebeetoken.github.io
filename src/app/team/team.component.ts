import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bee-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  isExpanded: boolean;


  constructor() { }

  ngOnInit() {
    this.isExpanded = false;
  }

  showMore() {
    this.isExpanded = true;
  }
}
