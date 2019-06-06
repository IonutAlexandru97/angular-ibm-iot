import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import 'hammerjs';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from 'src/@client/services/auth.guard';


const routes: Routes = [
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterModule'},
  { path: 'forgot-password', loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'},
  { path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'chat',
        loadChildren: './pages/chat/chat.module#ChatModule',
      },
      {
        path: 'inbox',
        loadChildren: './pages/inbox/inbox.module#InboxModule'
      },
      {
        path: 'maps',
        loadChildren: './pages/maps/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'calendar',
        loadChildren: './pages/calendar/calendar.module#CalendarAppModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
