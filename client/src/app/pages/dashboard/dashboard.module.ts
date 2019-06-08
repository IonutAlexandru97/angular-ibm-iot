import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../@client/shared/material-components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LineChartWidgetModule } from './line-chart-widget/line-chart-widget.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

    LineChartWidgetModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
