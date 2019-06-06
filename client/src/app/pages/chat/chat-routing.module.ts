import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ChatComponent, data: { scrollDisabled: true }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChatRoutingModule {}
