import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message, ChatService } from './chat.service';
import 'rxjs/add/operator/scan';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'client-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  drawerOpen = true;
  drawerMode = 'side';
  messages: Observable<Message[]>;
  formValue: string;
  replyCtrl: FormControl
  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.replyCtrl = new FormControl();
    this.messages = this.chat.conversation.asObservable()
    .scan((acc, val) => acc.concat(val));
  }

  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
}
