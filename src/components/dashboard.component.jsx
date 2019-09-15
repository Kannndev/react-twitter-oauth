import React, { Component } from 'react';

import FollowersCard from './followerscard.component';
import './dashboard.component.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterBy: '',
            sortBy: 'ascending'
        }
    }

    render() {
        const { followersList } = this.props;
        return (
            <React.Fragment>
                <div className="filters">
                    <form className="form-inline md-form form-sm mt-10">
                        <div className="form-group">
                            <input className="form-control form-control-sm ml-2" type="text"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => this.setState({ filterBy: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sortSelect" className="pr-2">Sort By </label>
                            <select className="form-control" id="sortSelect"
                                onChange={(e) => this.setState({ sortBy: e.target.value })}>
                                <option value="ascending">A-Z</option>
                                <option value="descending">Z-A</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="followerslist">
                    {this.sort(followersList).filter(elem => {
                        return elem.name.toLocaleLowerCase().includes(this.state.filterBy.toLocaleLowerCase());
                    }).map(elem => {
                        return <FollowersCard key={elem.screen_name} follower={elem} />
                    })}
                </div>
            </React.Fragment>
        );
    }

    sort(followersList) {
        if (this.state.sortBy === 'ascending') {
            return followersList.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            return followersList.sort((a, b) => b.name.localeCompare(a.name));
        }
    }
}

export default Dashboard;