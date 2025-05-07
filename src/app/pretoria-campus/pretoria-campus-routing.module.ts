import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretoriaCampusPage } from './pretoria-campus.page';

const routes: Routes = [
  {
    path: '',
    component: PretoriaCampusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretoriaCampusPageRoutingModule {}
