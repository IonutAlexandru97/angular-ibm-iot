import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

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
