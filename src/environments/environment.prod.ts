import { config } from "rxjs";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: 'byte-me-recipe-app',
    storageBucket: 'byte-me-recipe-app.appspot.com',
    messagingSenderId: '728385953403',
    appId: config.appId,
    measurementId: config.measurementId,
  },
};

