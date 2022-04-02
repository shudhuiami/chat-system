import React, {Component} from "react";
import {Route, BrowserRouter as Router, BrowserRouter, Link} from 'react-router-dom'
import {Switch} from "react-router-dom";

// StyleSheet
import './assets/scss/index.scss';

// Layouts
import Auth from "./components/layout/auth";
import Front from "./components/layout/front";

// Auth Pages
import Login from "./components/auth/login";
import {Register} from "./components/auth/register";
import Reset from "./components/auth/reset";

// Front Pages
import {Home} from "./components/pages/home";
import {PageNotFound} from "./components/pages/pageNotFound";

const AppRoute = ({component:Component,layout:Layout, ...rest}) => (
    <Route {...rest} render={props => (
        <Layout><Component {...props} /></Layout>
    )}/>
)
function App(){
    return (
        <BrowserRouter>
                <Router>
                    <Switch>
                        {/*Auth Routes*/}
                        <AppRoute path={'/'} exact layout={Auth} component={Login} />
                        <AppRoute path={'/Register'} exact layout={Auth} component={Register} />
                        <AppRoute path={'/reset'} exact layout={Auth} component={Reset} />

                        {/*Front Routes*/}
                        <AppRoute path={'/home'} exact layout={Front} component={Home} />
                        <AppRoute layout={Front}  component={PageNotFound} />
                    </Switch>
                </Router>
        </BrowserRouter>
    );
}

export default App;