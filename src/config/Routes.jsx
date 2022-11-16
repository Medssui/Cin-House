import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/signup'
                component={Signup}
            />
            <Route
                path='/login'
                exact
                component={Login}
            />
            <Route
                path='/forgot-password'
                component={ForgotPassword}
            />
            <Route
                path='/contact'
                component={Contact}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                
                component={Home}
            />
            
            
        </Switch>
    );
}

export default Routes;
