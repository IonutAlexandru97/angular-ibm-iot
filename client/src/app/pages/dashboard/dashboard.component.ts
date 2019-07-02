import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ChartData } from 'chart.js';
import { DashboardService } from './dashboard.service';
import { AuthenticationService } from 'src/@client/services/authentication.service';
import { LineChartWidgetOptions } from './line-chart-widget/line-chart-widget-options.interface';

@Component({
  selector: 'client-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              public auth: AuthenticationService) { }
  private _gap = 16;
  gap = `${this._gap}px`;

  ngOnInit() {
    this.clicksData$ = this.dashboardService.getClicks();
  }

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }

  clicksData$: Observable<ChartData>;
  totalClicksOptions: LineChartWidgetOptions = {
    title: 'Temperature Variaton',
    //gain: -6.1,
    //subTitle: 'compared to last month',
    background: '#4CAF50',
    color: '#FFFFFF'
  };

}

