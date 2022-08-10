import * as Sentry from '@sentry/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export const App = () => (
  <BrowserRouter>
    <SentryRoutes>
      <Route element={<div>Edit Page</div>} path="foo/:barId/edit" />
      <Route element={<div>View Page</div>} path="foo/:barId" />
    </SentryRoutes>
  </BrowserRouter>
);