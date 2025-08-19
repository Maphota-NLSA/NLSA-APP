import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment'; // Use the correct environment file
import {inject} from '@angular/core';
import { Analytics, logEvent} from '@angular/fire/analytics';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';

@NgModule({
  // providers: [
  //   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  //   provideAnalytics(() => getAnalytics()),   
  // ],
})
export class AppFirebaseModule {
  private analytics: Analytics = inject(Analytics);
  static logScreenView: () => void;

  constructor(){
    logEvent(this.analytics, 'page_view', {page: 'Home'});
  }

  onUserClick(){
    logEvent(this.analytics, 'user_click', { item: 'main-menu'});
  }

    async logScreenView() {
      await FirebaseAnalytics.logEvent({
        name: 'screen_view',
        params: { 
          screen_name: 'HomePage',
        },
      });
    }
  }

 