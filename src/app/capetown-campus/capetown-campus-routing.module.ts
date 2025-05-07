import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapetownCampusPage } from './capetown-campus.page';

const routes: Routes = [
  {
    path: '',
    component: CapetownCampusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapetownCampusPageRoutingModule {}
