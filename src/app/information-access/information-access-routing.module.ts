import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationAccessPage } from './information-access.page';

const routes: Routes = [
  {
    path: '',
    component: InformationAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationAccessPageRoutingModule {}
