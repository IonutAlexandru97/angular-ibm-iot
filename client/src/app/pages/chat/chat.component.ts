import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Message, ChatService } from './chat.service';
import 'rxjs/add/operator/scan';
import { FormControl } from '@angular/forms';
import { ScrollbarDirective } from 'src/@client/shared/scrollbar/scrollbar.directive';
import { MatDialog } from '@angular/material';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';

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
  replyCtrl: FormControl;
  public message: Message;


  @ViewChild('messagesScroll', {read: ScrollbarDirective}) messagesScroll: ScrollbarDirective;

  constructor(
    public chat: ChatService,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.replyCtrl = new FormControl();
    this.messages = this.chat.conversation.asObservable()
    .scan((acc, val) => acc.concat(val));
  }

  openCompose(){
    this.dialog.open(InboxComposeComponent);
  }

  sendMessage(){
    this.formValue = this.replyCtrl.value;
    this.chat.converse(this.replyCtrl.value);
    this.cd.markForCheck();
    this.replyCtrl.reset();
    setTimeout(() => {
      this.messagesScroll.scrollbarRef.getScrollElement().scrollTo(0, this.messagesScroll.scrollbarRef.getScrollElement().scrollHeight);
    }, 10);
  }
}
