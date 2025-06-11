import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/**
 * Root application routes.
 * All routes are lazy-loaded for performance.
 */
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'using-library',
    loadChildren: () =>
      import('./pages/using-library/using-library.module').then(
        m => m.UsingLibraryPageModule
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pretoria-campus',
    loadChildren: () => import('./pretoria-campus/pretoria-campus.module').then( m => m.PretoriaCampusPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'capetown-campus',
    loadChildren: () => import('./capetown-campus/capetown-campus.module').then( m => m.CapetownCampusPageModule)
  },
  {
    path: 'bibliographic-services',
    loadChildren: () => import('./bibliographic-services/bibliographic-services.module').then( m => m.BibliographicServicesPageModule)
  },
  {
    path: 'preservation-services',
    loadChildren: () => import('./preservation-services/preservation-services.module').then( m => m.PreservationServicesPageModule)
  },
  {
    path: 'outreach',
    loadChildren: () => import('./outreach/outreach.module').then( m => m.OutreachPageModule)
  },
  {
    path: 'information-access',
    loadChildren: () => import('./information-access/information-access.module').then( m => m.InformationAccessPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'search-discovery',
    loadChildren: () => import('./search-discovery/search-discovery.module').then( m => m.SearchDiscoveryPageModule)
  },
     {
    path: 'nlsa-contact',
    loadChildren: () => import('./pages/nlsa-contact/nlsa-contact.module').then( m => m.NlsaContactPageModule)
  },
   {
    path: '**',
    redirectTo: 'home' // fallback for unknown paths
  },
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // improves perceived performance
      scrollPositionRestoration: 'enabled',  // optional: restores scroll on back nav
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
