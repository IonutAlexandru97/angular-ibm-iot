import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from 'src/@client/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginUserData: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  login(){
    this.auth.login(this.loginUserData).subscribe(res =>{
      this.router.navigateByUrl('/profile')
    }, err => console.log(err))
  }



}
