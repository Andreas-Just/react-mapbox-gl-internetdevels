import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import LoadingPage from './pages/LoadingPage';

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <MapPage />
    </Route>

    <Route path="/about">
      <AboutPage />
    </Route>

    <Route path="/settings">
      <LoadingPage />
    </Route>

    <Redirect to="/" />
  </Switch>
);
