import React, { Component } from 'react';
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

    handleLogout = () =>{
        localStorage.clear();
    }

    render() {
        return (
            <div className="dropdown">
                <button className="dropButton" onClick={this.showDropDown}>User</button>
                {this.state.displayDropDown ? (
                    <div className="dropdownMenu">
                        <a href="/profile">Profile</a>
                        <a href="#">Settings</a>
                        <a href="/" onClick={this.handleLogout}>Logout</a>
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