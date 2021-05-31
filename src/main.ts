import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from 'environments/environment'
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

if (environment.production) {
  enableProdMode();
}
Sentry.init({
  dsn: "https://70441b7e55114a418108944e2fffd798@o576647.ingest.sentry.io/5730497",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.25,
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
