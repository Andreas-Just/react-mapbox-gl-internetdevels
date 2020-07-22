import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import ErrorPage from './pages/ErrorPage';

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <MapPage />
    </Route>

    <Route path="/about" exact>
      <AboutPage />
    </Route>

    <Route path="/settings" exact>
      <SettingsPage />
    </Route>

    <Route path="/error">
      <ErrorPage message="Not found" />
    </Route>
    <Redirect from="/*" to="/error" />
  </Switch>
);
