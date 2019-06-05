import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule
  ],
  declarations: [InboxComponent]
})
export class InboxModule { }
