import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: HomeComponent},
  //{ path: 'register', component: RegisterComponent },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
  //{ path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
