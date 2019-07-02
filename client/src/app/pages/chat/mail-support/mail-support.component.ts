import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MailService } from 'src/@client/services/mail.service';
import { AuthenticationService, UserDetails } from 'src/@client/services/authentication.service';

export interface MailDetails {
  email?: string;
  subject?: string;
  text?: string;
}

@Component({
  selector: 'app-mail-support',
  templateUrl: './mail-support.component.html',
  styleUrls: ['./mail-support.component.scss']
})
export class MailSupportComponent implements OnInit {
  data: MailDetails = {
    email: 'ionut_alexandru.candea@yahoo.com',
    subject: '',
    text: ''
  };
  details: UserDetails = {
    email: ''
  };
  constructor(public dialogRef: MatDialogRef<MailSupportComponent>,
              private mailService: MailService,
              private auth: AuthenticationService) { }


ngOnInit() {
  this.auth.profile().subscribe(user => {
    this.details = user;
  },
  (err)=>{
    console.log(err);
  })
}

  send(){
    this.mailService.sendMail(this.data)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }


}
