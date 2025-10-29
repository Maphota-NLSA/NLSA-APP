import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsUpdatePage } from './notifications-update.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsUpdatePageRoutingModule {}
