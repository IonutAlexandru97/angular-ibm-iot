import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ClientCard,
  ClientCardActions,
  ClientCardContent,
  ClientCardHeader,
  ClientCardHeaderActions,
  ClientCardHeaderSubTitle,
  ClientCardHeaderTitle
} from './card.component';

const cardComponents = [
  ClientCard,
  ClientCardHeader,
  ClientCardHeaderTitle,
  ClientCardHeaderSubTitle,
  ClientCardHeaderActions,
  ClientCardContent,
  ClientCardActions
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...cardComponents
  ],
  exports: [
    ...cardComponents
  ]
})
export class ClientCardModule {
}
