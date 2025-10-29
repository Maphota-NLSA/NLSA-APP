import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeImageUpdatePage } from './home-image-update.page';

const routes: Routes = [
  {
    path: '',
    component: HomeImageUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeImageUpdatePageRoutingModule {}
