import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/home.component'
import Login from './components/login.component';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={() => {
                        return !this.props.isAuthenticated ? (
                            <Login />
                        ) : (
                                <Redirect to="/home" />
                            );
                    }} />
                    <Route path="/home" render={() => {
                        return this.props.isAuthenticated ? (
                            <Home />
                        ) : (
                                <Redirect to="/" />
                            );
                    }} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(AppRouter);