import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
