import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { LoadingIndicatorModule } from 'src/@client/shared/loading-indicator/loading-indicator.module';
import { ClientSharedModule } from 'src/@client/client-shared.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from './toolbar/toolbar.module';
import { NavigationModule } from './navigation/navigation.module';
import { BackdropModule } from 'src/@client/shared/backdrop/backdrop.module';
import { FooterModule } from './footer/footer.module';
import { ConfigPanelModule } from './config-panel/config-panel.module';
import { QuickpanelModule } from './quickpanel/quickpanel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    ClientSharedModule,
    SidenavModule,
    ToolbarModule,
    NavigationModule,
    BackdropModule,
    FooterModule,
    ConfigPanelModule,
    QuickpanelModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
