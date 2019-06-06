import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule } from '@angular/material';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
