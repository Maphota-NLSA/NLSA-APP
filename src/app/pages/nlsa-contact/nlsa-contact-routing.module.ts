import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NlsaContactPage } from './nlsa-contact.page';

const routes: Routes = [
  {
    path: '',
    component: NlsaContactPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NlsaContactPageRoutingModule {}
