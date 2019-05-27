import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
