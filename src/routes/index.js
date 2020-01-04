import React from 'react';
import {Switch} from 'react-router-dom'
import Route from './Router';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup"  component={SignUp}/>
      <Route path="/dashboard"  component={Dashboard} isPrivate/>
      <Route path="/profile"  component={Profile} isPrivate/>

      <Route path="/" component={()=><h1>404 Page not found</h1>} />
    </Switch>
  );
}
