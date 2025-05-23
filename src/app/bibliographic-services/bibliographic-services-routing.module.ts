import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliographicServicesPage } from './bibliographic-services.page';

const routes: Routes = [
  {
    path: '',
    component: BibliographicServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliographicServicesPageRoutingModule {}
