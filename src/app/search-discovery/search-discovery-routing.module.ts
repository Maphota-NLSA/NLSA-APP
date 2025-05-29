import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDiscoveryPage } from './search-discovery.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDiscoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDiscoveryPageRoutingModule {}
