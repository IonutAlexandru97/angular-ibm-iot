import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/auth.guard';
import 'hammerjs';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterModule'},
  { path: 'forgot-password', loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'},
  { path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
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
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
