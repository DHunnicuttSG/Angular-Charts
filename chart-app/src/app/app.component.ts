import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyChartComponent } from './Components/my-chart/my-chart.component';

@Component({
  selector: 'app-root',
  imports: [ MyChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chart-app';
}
