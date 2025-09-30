import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsupdatePage } from './newsupdate.page';

const routes: Routes = [
  {
    path: '',
    component: NewsupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsupdatePageRoutingModule {}
