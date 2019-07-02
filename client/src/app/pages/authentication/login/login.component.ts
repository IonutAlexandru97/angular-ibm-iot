import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { fadeInUpAnimation } from 'src/@client/animations/fade-in-up.animation';
import { TokenPayload, AuthenticationService } from 'src/@client/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private router: Router) { }

  form: FormGroup
  inputType = 'password';
  visible = false;
  loginUserData: TokenPayload = {
    email: '',
    password: ''
  };

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.auth.login(this.loginUserData).subscribe(res => {
      this.router.navigate(['/'])
      this.snackbar.open('Logged in with success!!', 'Welcome to your Dashboard!', {
        duration: 10000
      });
    }, err => console.log(err));
  }

  toggleVisibility(){
    if(this.visible){
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    }else{
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

}
