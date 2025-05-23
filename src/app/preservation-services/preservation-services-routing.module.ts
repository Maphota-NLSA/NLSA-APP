import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreservationServicesPage } from './preservation-services.page';

const routes: Routes = [
  {
    path: '',
    component: PreservationServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreservationServicesPageRoutingModule {}
