import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ChatService } from '../chat.service';

@Component({
  selector: 'client-inbox-compose',
  templateUrl: './inbox-compose.component.html',
  styleUrls: ['./inbox-compose.component.scss']
})
export class InboxComposeComponent implements OnInit {
   data: any = {};
  constructor(public dialogRef: MatDialogRef<InboxComposeComponent>,
              private chatService: ChatService,
              private snackbar: MatSnackBar) {}

  ngOnInit() {
  }

//send(){
//  this.chatService.sendSupportMail(this.data)
//  .subscribe(
//    res => {
//      console.log(res)
//    },
//    err => console.log(err)
//  )
//  this.snackbar.open('Password successfully reset!!', 'A notification was sent to your e-mail address', {
//    duration: 10000
//  });
//}

}
