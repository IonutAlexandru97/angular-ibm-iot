import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatRoutingModule } from './chat-routing.module';
import { MaterialModule } from 'src/@client/shared/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChatComponent,
  ],
  exports: [ChatComponent],
  providers: [ChatService]
})
export class ChatModule { }
