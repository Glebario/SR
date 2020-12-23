import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { LoginPageView } from './pages/AUTH/LoginPageView';
import { RegistrationPageView } from './pages/AUTH/RegistrationPageView';
// import IAuthModel from './domain/models/interfaces/IAuthModel';
// import IUserModel from './domain/models/interfaces/IUserModel';


export const useRoutes: any = () => (
  <Switch>
    <Route component={LoginPageView} path="/sign-in" />
    <Route component={RegistrationPageView} path="/sign-up" />
      <Redirect to="/sign-in" />
    <Route path="*" render={() => '404 NOT FOUND'} />
  </Switch>
);
