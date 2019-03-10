import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _login: LoginService) { }

  ngOnInit() {
  }
  login(){
    this._login.login(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
