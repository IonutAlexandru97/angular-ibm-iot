import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { LoadingIndicatorModule } from 'src/@client/shared/loading-indicator/loading-indicator.module';
import { ClientSharedModule } from 'src/@client/client-shared.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    ClientSharedModule,
    SidenavModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
