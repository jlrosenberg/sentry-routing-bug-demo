import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom';

import { App } from './App';

Sentry.init({
  dsn: '<obfuscate dsn>',
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