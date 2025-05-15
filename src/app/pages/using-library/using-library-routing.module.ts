import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsingLibraryPage } from './using-library.page';

/**
 * Routes configuration for the UsingLibraryPage.
 * This module is lazy-loaded via AppRoutingModule.
 */
const routes: Routes = [
  {
    path: '',
    component: UsingLibraryPage,
    title: 'Using the Library' // Optional: Adds page title (Angular 14+)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsingLibraryPageRoutingModule {}
