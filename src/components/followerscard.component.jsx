import React, { Component } from 'react';

import './followerscard.component.css';
class FollowersCard extends Component {
    render() {
        const { follower } = this.props;
        return (<div className="col-lg-2 mt-3" key={follower.id}>
            <div className="card">
                <img className="card-img-top" src={follower.profile_image_url} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="text-capitalize">{follower.name}</h4>
                    <h6 className="text-black-50">{follower.screen_name}</h6>
                </div>
            </div>
        </div>);
    }
}

export default FollowersCard;