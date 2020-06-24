import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Home from '../home/Home';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';

import PrivateRoute from '../routing/PrivateRoute';
import Favourite from '../favourite/Favourite';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/favourite' component={Favourite} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
