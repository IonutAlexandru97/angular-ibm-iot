import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../@client/shared/material-components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { NewsService } from './news/news.service';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { MomentPipe } from './weather/moment.pipe';
import { FahrenheitPipe } from './weather/fahrenheit.pipe';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  declarations: [DashboardComponent, NewsComponent, WeatherComponent, MomentPipe, FahrenheitPipe],
  providers: [DashboardService, NewsService]
})
export class DashboardModule {
}
