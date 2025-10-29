import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';

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
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  },
  {
    path: 'opportunities',
    loadChildren: () => import('./opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
  },
   {
    path: 'latest-news',
    loadChildren: () => import('./latest-news/latest-news.module').then( m => m.LatestNewsPageModule)
  },
  {
  path: 'news-details/:id',
  component: NewsDetailsComponent,
},
 {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
   {
    path: 'newsupdate',
    loadChildren: () => import('./admin/newsupdate/newsupdate.module').then( m => m.NewsupdatePageModule)
  },
  {
    path: 'news-add',
    loadChildren: () => import('./admin/news-add/news-add.module').then( m => m.NewsAddPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'notifications-update',
    loadChildren: () => import('./admin/notifications-update/notifications-update.module').then( m => m.NotificationsUpdatePageModule)
  },
  {
    path: 'home-image-update',
    loadChildren: () => import('./admin/home-image-update/home-image-update.module').then( m => m.HomeImageUpdatePageModule)
  },
  {
    path: 'notifications-add',
    loadChildren: () => import('./admin/notifications-add/notifications-add.module').then( m => m.NotificationsAddPageModule)
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
