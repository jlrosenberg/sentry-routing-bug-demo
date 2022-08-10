import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom';

import { App } from './App';

Sentry.init({
  dsn: 'https://f1b056337f764d20babbdd0756bacd13@o424597.ingest.sentry.io/6638353',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      )
    })
  ],
  environment: window.location.host,
  tracesSampleRate: 1.0
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);