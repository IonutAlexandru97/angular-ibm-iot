import { Component, OnInit } from '@angular/core';
import { fadeInUpAnimation } from 'src/@client/animations/fade-in-up.animation';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'client-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ForgotPasswordComponent implements OnInit {

  data = {}
  form = this.fb.group({
    subject: [null, Validators.required],
    body: [null, Validators.required]
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private sendMail: ForgotPasswordService
  ) { }

  ngOnInit() {
  }

 // resetPassword(){
 //   this.snackbar.open('Password successfully reset!!', 'A notification was sent to your e-mail address', {
 //     duration: 10000
 //   });
 //   this.router.navigate(['/login']);
 // }

  resetPassword(){
    this.sendMail.send(this.data)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
