import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  appId = 'Dark'; //Default theme

  switchTheme(appId: string){
    this.appId = appId; //Change default theme
  }
}
