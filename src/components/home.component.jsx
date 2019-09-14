import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

import NavBar from './navbar.component';
import * as actionCreators from '../store/actions/actions';

class Home extends Component {

    componentDidMount() {
        this.props.getUserDetails(this.props.username);
    }

    render() {
        const override = css`
            position:fixed;
            top: 50%;
            left: 50%;
            margin-left: -15px;
        `;
        const { name, profile_image_url } = this.props.userDetails
        return (
            <React.Fragment>
                <NavBar name={name} profileImageUrl={profile_image_url} logout={this.props.onLogout} />
                <BeatLoader
                    css={override}
                    sizeUnit={"px"}
                    size={30}
                    color={'#36D7B7'}
                    loading={this.props.loading}
                />
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails,
        followerslist: state.followersList,
        username: state.username,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetails: (username) => dispatch(actionCreators.getUserDetails(username)),
        onLogout: () => dispatch(actionCreators.onLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);