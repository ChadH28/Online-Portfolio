import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact'

const Routes = () => (
        <Switch>
            <Route exact path="/Student-Portfolio" component={LandingPage}/>
            <Route exact path="/aboutme" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/testimonials" component={Testimonials}/>
            <Route exact path="/contactme" component={Contact}/>            
        </Switch>
)

export default Routes
