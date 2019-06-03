import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing,module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { AuthenticationService } from 'src/@client/services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthenticationService]
})
export class RegisterModule { }
