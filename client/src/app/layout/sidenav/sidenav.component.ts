import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavState } from './sidenav-state.enum';
import { SidenavService } from './sidenav.service';
import { ThemeService } from '../../../@client/services/theme.service';
import { UserDetails, AuthenticationService } from 'src/@client/services/authentication.service';

@Component({
  selector: 'client-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  @HostBinding('class.expanded')
  expanded: boolean;

  items$: Observable<SidenavItem[]>;

  sidenavState$: Observable<SidenavState>;
  sidenavState: string;

  isCollapsedState: boolean;
  details: UserDetails;

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private themeService: ThemeService,
              private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => this.sidenavService.sortRecursive(items, 'position'))
    );
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) =>{
      console.error(err);
    })
  }

  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    if (this.collapsed) {
      this.expanded = true;
    }
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    if (this.collapsed) {
      this.expanded = false;
    }
  }

  ngOnDestroy() {
  }
}
