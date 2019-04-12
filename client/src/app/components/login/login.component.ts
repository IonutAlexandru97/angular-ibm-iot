import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _login: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  login(){
    this._login.login(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    )
  }

}
