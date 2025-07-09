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
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'search-discovery',
    loadChildren: () => import('./search-discovery/search-discovery.module').then( m => m.SearchDiscoveryPageModule)
  },{
    path: 'nlsa-contact',
    loadChildren: () => import('./pages/nlsa-contact/nlsa-contact.module').then( m => m.NlsaContactPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
<<<<<<< HEAD
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
},{
    path: 'opportunities',
    loadChildren: () => import('./opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
  },
   {
    path: '**',
    redirectTo: 'home' // fallback for unknown paths
  },
<<<<<<<<< Temporary merge branch 1
  
=========
>>>>>>>>> Temporary merge branch 2

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
