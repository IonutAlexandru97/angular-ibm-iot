import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/auth.guard';
import 'hammerjs';


const routes: Routes = [
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterModule'},
  { path: 'forgot-password', loadChildren: './pages/authentication/forgot-password/forgot-password.module#ForgotPasswordModule'}
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
