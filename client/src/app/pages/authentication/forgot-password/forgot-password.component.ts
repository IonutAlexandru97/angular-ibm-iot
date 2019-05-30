import { Component, OnInit } from '@angular/core';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'client-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ForgotPasswordComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.required]
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  resetPassword(){
    this.snackbar.open('Password successfully reset!!', 'A notification was sent to your e-mail address', {
      duration: 10000
    });
    this.router.navigate(['/login']);
  }

}
