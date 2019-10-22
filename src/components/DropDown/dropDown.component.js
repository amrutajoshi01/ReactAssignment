import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css";
class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            displayDropDown: false,
        };
    };

    showDropDown = (event) => {
        event.preventDefault();
        this.setState({ displayDropDown: true }, () => {
            document.addEventListener('click', this.hideDropDown);
        });
    }

    hideDropDown = () => {
        this.setState({ displayDropDown: false }, () => {
            document.removeEventListener('click', this.hideDropDown);
        });

    }

    handleLogout = () => {
        localStorage.removeItem('username', this.state.username);
        localStorage.removeItem('password', this.state.password);
        localStorage.setItem('isAuthenticated', false);
        this.props.onAuthentication();
    }

    render() {
        return (
            <div className="dropdown">
                <button className="dropButton" onClick={this.showDropDown}>User</button>
                {this.state.displayDropDown ? (
                    <div className="dropdownMenu">
                        <Link to="/profile">Profile</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="#">Settings</Link>
                        <a href="/login" onClick={this.handleLogout}>Logout</a>
                    </div>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default DropDown;