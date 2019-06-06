import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      path: '',
      redirectTo: 'dashboard'
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
