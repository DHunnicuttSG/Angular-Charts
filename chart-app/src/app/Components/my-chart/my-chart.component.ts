import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-my-chart',
  imports: [],
  templateUrl: './my-chart.component.html',
  styleUrl: './my-chart.component.css'
})
export class MyChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart("myBarChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales in Thousands',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}
