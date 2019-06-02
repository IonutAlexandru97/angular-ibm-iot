import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpStaggerElementDirective } from './animations/fade-in-up.animation';
import { FadeInRightStaggerElementDirective } from './animations/fade-in-right.animation';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatRippleModule,
  MatSlideToggleModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsModule } from './shared/breadcrumbs/breadcrumbs.module';
import { TitleModule } from './shared/title/title.module';
import { PageModule } from './shared/page/page.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FadeInUpStaggerElementDirective,
    FadeInRightStaggerElementDirective
  ],
  exports: [
    BreadcrumbsModule,
    FadeInUpStaggerElementDirective,
    FadeInRightStaggerElementDirective,
    TitleModule,
    PageModule,
    SidebarModule,
    RouterModule,

    // External
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule,
    FontAwesomeModule,
    ScrollingModule
  ]
})
export class ClientSharedModule {
}
