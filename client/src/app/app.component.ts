import { Component, Renderer2, Inject } from '@angular/core';
import { ThemeService } from 'src/@client/services/theme.service';
import { MatIconRegistry } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { SidenavService } from './layout/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private themeService: ThemeService,
              private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document){
    this.iconRegistry.setDefaultFontSetClass('material-icons');
    this.themeService.theme$.subscribe(theme => {
      if(theme[0]){
        this.render.removeClass(this.document.body, theme[0]);
      }
      this.render.addClass(this.document.body, theme[1]);
    });

    this.sidenavService.addItems([
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true
      },
      {
        name: 'Mail Support',
        routeOrFunction: '/inbox',
        icon: 'contact_support',
        position: 11,
        badge: '0',
        badgeColor: '#2196F3'
      },
      {
        name: 'Live Support',
        routeOrFunction: '/chat',
        icon: 'chat',
        position: 12,
        badge: '0',
        badgeColor: '#2196F3'
      },
      {
        name: 'Maps',
        routeOrFunction: '/maps',
        icon: 'place',
        position: 13
      },
      {
        name:'Calendar',
        routeOrFunction: '/calendar',
        icon: 'calendar_today',
        position: 14
      }
    ])
  }
}
