import { Routes } from '@angular/router';
import { MyChartComponent } from './Components/my-chart/my-chart.component';
import { MyChart2Component } from './Components/my-chart2/my-chart2.component';

export const routes: Routes = [
    {
        path: 'chart',component: MyChartComponent
    },
    {
        path: 'chart2', component: MyChart2Component
    }
];
