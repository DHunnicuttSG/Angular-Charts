import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);


@Component({
  selector: 'app-my-chart2',
  imports: [],
  templateUrl: './my-chart2.component.html',
  styleUrl: './my-chart2.component.css'
})

export class MyChart2Component implements OnInit, AfterViewInit {

  @ViewChild('myDynamicBarChart') myDynamicBarChart!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this.fetchAndCreateChart();
  }

  fetchAndCreateChart() {
    fetch("http://vending.us-east-1.elasticbeanstalk.com/items")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Data from API:", data);
        const labels = data.map((item: { name: any; }) => item.name);
        const chartData = data.map((item: { quantity: any; }) => item.quantity);

        this.chart = new Chart("myDynamicBarChart", {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Data from API',
              data: chartData,
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // ... other colors
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                // ... other colors
              ],
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Chart from API Data',
                font: {
                  size: 16
                }
              }
            }
          }
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Handle error
      });
  }
}