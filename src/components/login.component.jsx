import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TwitterLogin from 'react-twitter-auth'

import * as actionCreators from '../store/actions/actions';

class Login extends Component {

    onSuccess = (response) => {
        const token = response.headers.get('x-auth-token');
        response.json().then(user => {
            if (token) {
                this.props.onLoginSuccess({ isAuthenticated: true, user: user, token: token });
                this.props.history.push('/home');
            }
        });
    };

    onFailed = (error) => {
        alert(error);
    };

    render() {
        let content = !!this.props.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button" >
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                    onFailure={this.onFailed} onSuccess={this.onSuccess}
                    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />
            );

        return (
            <div className="App">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (payload) => dispatch(actionCreators.onLogin(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));