// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCBr1FmLOb5bAFILyFV5Hi-5fDNpUKc3ZY',
    authDomain: 'tasks-cb913.firebaseapp.com',
    databaseURL: 'https://tasks-cb913.firebaseio.com',
    projectId: 'tasks-cb913',
    storageBucket: 'tasks-cb913.appspot.com',
    messagingSenderId: '884357807039'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
