import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
