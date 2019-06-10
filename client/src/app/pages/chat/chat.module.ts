import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatRoutingModule } from './chat-routing.module';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { ScrollbarModule } from 'src/@client/shared/scrollbar/scrollbar.module';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollbarModule,
    QuillModule
  ],
  declarations: [
    ChatComponent,
    InboxComposeComponent
  ],
  exports: [ChatComponent],
  providers: [ChatService],
  entryComponents: [InboxComposeComponent]
})
export class ChatModule { }
