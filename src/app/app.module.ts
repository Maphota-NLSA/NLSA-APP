import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireAnalyticsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,

    HttpClientModule, // Added for backend API calls

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Initialize Firebase Analytics if needed
    // This can be done in the AppFirebaseModule instead
  } 
}

