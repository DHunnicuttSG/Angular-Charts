import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { MyChart2Component } from './Components/my-chart2/my-chart2.component'; 

@Component({
  selector: 'app-root',
  imports: [ MyChartComponent, MyChart2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chart-app';
}
