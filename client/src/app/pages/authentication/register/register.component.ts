import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'client-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUpAnimation]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  inputType = 'password';
  visible = false
  credentials: TokenPayload = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private auth: AuthenticationService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })
  }

  register(){
    this.auth.register(this.credentials).subscribe(() => {
      this.snackbar.open('Registered in with success!!', 'Welcome to your Dashboard!', {
        duration: 10000
      }), (err) => {
        console.log(err);
      };
    })
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
