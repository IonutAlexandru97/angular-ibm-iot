import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatRoutingModule } from './chat-routing.module';
import { MaterialModule } from 'src/@client/shared/material-components.module';
import { ScrollbarModule } from 'src/@client/shared/scrollbar/scrollbar.module';
import { QuillModule } from 'ngx-quill';
import { MailSupportComponent } from './mail-support/mail-support.component';
import { MailService } from 'src/@client/services/mail.service';

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
    MailSupportComponent
  ],
  exports: [ChatComponent],
  providers: [
    ChatService,
    MailService
  ],
  entryComponents: [MailSupportComponent]
})
export class ChatModule { }
