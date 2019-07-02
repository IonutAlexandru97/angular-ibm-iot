import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { clicksChartDemoLabels, clicksChartDemoValues } from '../demo-data/widget-demo-data';
import { map } from 'rxjs/operators';
import { ChartData } from 'chart.js';
import { AuthenticationService } from 'src/@client/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


constructor() { }

getClicks() {
  // Simulating request from local data
  return of({ labels: clicksChartDemoLabels(), data: clicksChartDemoValues }).pipe(
    map(values => this.toClicksChartData(values))
  );
}
toClicksChartData(chartData: { labels: string[], data: number[] }) {
  return {
    labels: chartData.labels,
    datasets: [
      {
        //label: '# of Clicks',
        data: chartData.data,
        fill: false,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2,
      }
    ]
  } as ChartData;
}


}
