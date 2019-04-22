import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: TokenPayload = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  login(){
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    },
    (err) =>{
      console.error(err);
    });
  }

}
