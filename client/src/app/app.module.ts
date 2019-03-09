import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatSliderModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
