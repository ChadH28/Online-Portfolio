import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const Routes = () => (
        <Switch>
            <Route exact path="/Student-Portfolio" component={LandingPage}/>           
        </Switch>
)

export default Routes
