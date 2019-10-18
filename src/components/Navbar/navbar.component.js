import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import DropDown from '../DropDown/dropDown.component';

import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenuItems: this.props.onAuthentication(),
        }
    }

    render() {

        return (
            <Router>
                <nav className="nav-wrapper">
                    <div className="container">
                        <ul className="right">
                            <li><a href="/" className="brand-logo">Shopping</a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/product">Products</a></li>
                            <li><input type="text" placeholder="Search" /> </li>
                        </ul>
                        <ul className="toggle">
                            {this.state.showMenuItems && <li ><a href="/login">Login</a></li>}
                            {this.state.showMenuItems && <li><DropDown /></li>}
                        </ul>
                    </div>
                </nav>
            </Router>
        )
    }
}
export default Navbar;

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
