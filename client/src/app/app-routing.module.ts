import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/auth.guard';
import 'hammerjs';


const routes: Routes = [
  //{ path: '', loadChildren: ''},
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginModule' }
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
