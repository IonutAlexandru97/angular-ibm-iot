import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickpanelComponent } from './quickpanel.component';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { ScrollbarModule } from 'src/@client/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ScrollbarModule
  ],
  declarations: [QuickpanelComponent],
  exports: [QuickpanelComponent]
})
export class QuickpanelModule { }
