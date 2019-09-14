import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name, profileImageUrl } = this.props;
        return (
            <div>
                <nav className="header-page navbar navbar-light bg-light shadow-sm">
                    <a className="navbar-brand" href="#">Welcome {name}</a>
                    <div className="nav-item dropdown header-link show">
                        <Link to="/" className="dropdown-toggle text-capitalize p-0"
                            style={{ textDecoration: "none" }}
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <Avatar
                                src={profileImageUrl}
                                round={true}
                                size="40"
                            />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right header-dropdown"
                            aria-labelledby="navbarDropdown" >
                            <Link to="#" className="dropdown-item"
                                onClick={() => this.props.logout()}>Log out</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;