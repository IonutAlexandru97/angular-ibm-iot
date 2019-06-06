import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ForgotPasswordRoutingModule {}
