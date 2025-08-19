// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { getAnalytics } from "@angular/fire/analytics";
import { initializeApp } from "@angular/fire/app";

// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false, 
  // firebaseConfig: {
  //   apiKey: 'AIzaSyBklOBwfiSURtNgRlOHDQVC9xLHTxhsBq8',
  //   authDomain: 'nlsa-app.firebaseapp.com',
  //   projectId: 'nlsa-app',
  //   databaseURL: 'https://nlsa-app-default-rtdb.firebaseio.com',
  //   storageBucket: 'nlsa-app.firebasestorage.app',
  //   messagingSenderId: '692680829717',
  //   appId: '1:692680829717:web:88c9901f07bf990026171c',
  //   measurementId: 'G-2ZX5RGPVYN',
  // }
};

// const app = initializeApp(environment.firebaseConfig);

// const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
