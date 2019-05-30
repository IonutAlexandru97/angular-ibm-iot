import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
