import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'bee-token-distribution',
  templateUrl: './token-distribution.component.html',
  styleUrls: ['./token-distribution.component.scss']
})
export class TokenDistributionComponent {
  chart = [];

  ngOnInit() {
    let canvas = document.getElementById('canvasChart');

    this.chart = new Chart(canvas, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            30, // Community Reserve percentage
            15, // Team & Advisors percentage
            25, // Company Reserve percentage
            10, // Public Sale pt1 percentage
            10, // Public Sale pt2 percentage
            10, // Public Sale pt3 percentage
          ],
          backgroundColor: [
            '#fd9f28', // Commmunity Reserve background-color
            '#fece93', // Team & Advisors background-color
            '#fdc02f', // Company Reserve background-color
            '#fedf88', // Public Sale pt1 background-color
            '#fff3d5', // Public Sale pt2 background-color
            '#fffbef', // Public Sale pt3 background-color
          ],
          borderWidth: [
            1, // Community & Reserve border-width
            1, // Team & Advizors border-width
            1, // Company Reserve border-width
            1, // Public Sale pt1 border-width
            1, // Public Sale pt2 border-width
            1, // Public Sale pt3 border-width
          ]
        }],
        // Labels that show on mouse-hover
        labels: [
          'Community Reserve',
          'Team & Advisors',
          'Company Reserve',
          'Public Sale',
          'Public Sale',
          'Public Sale',
        ],
      },
      options: {
        cutoutPercentage: 0,
        rotation: 2 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: false
        },
        // Hide default legend & show custom legend
        legend: { display: false },
        // Show tooltip on mouseover
        tooltips: { enabled: true }
      }
    });
  }
}
