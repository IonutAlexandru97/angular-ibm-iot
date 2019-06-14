import { Component, Renderer2, Inject, HostListener } from '@angular/core';
import { ThemeService } from 'src/@client/services/theme.service';
import { MatIconRegistry } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
//   @HostListener("window:beforeunload", ["$event"])
//   clearLocalStorage(event){
//     localStorage.clear();
// }
  constructor(private themeService: ThemeService,
              private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private render: Renderer2,
              @Inject(DOCUMENT) private document: Document,
              private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
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
        name: 'Live Support',
        routeOrFunction: '/chat',
        icon: 'chat',
        position: 11,
        badge: '0',
        badgeColor: '#2196F3'
      },
      {
        name: 'Device current location',
        routeOrFunction: '/maps',
        icon: 'place',
        position: 13
      },
      {
        name: 'Angular Extra Features',
        icon: 'menu',
        position: 85,
        subItems: [
          {
            name:'Calendar',
            routeOrFunction: '/calendar'
          },
          {
            name: 'Online Editor',
            routeOrFunction: '/editor'
          }
        ]
      }
    ])
  }
}
