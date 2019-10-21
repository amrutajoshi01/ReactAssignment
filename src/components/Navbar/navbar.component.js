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
    }

    componentDidMount = () => {
        //document.getElementById('cartIcon').innerHTML += this.props.cartCountIncrement();
    }

    render() {
        //this.props.displayCartCount();
        console.log('Navbar: isAuthenticated: ' + this.props.isAuthenticated);
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="right">
                        <li><Link to="/" className="brand-logo">Shopping</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><input type="text" placeholder="Search" /> </li>
                    </ul>
                    <ul className="toggle">
                        {this.props.isAuthenticated && <li ><Link to="/login">Login</Link></li>}
                        {!this.props.isAuthenticated && <li><DropDown onAuthentication={this.props.onAuthentication} /></li>}
                        <li id="cartIcon"><i className="fa fa-shopping-cart"></i></li>
                        {/* {this.props.isAuthenticated && <li ><Link to="/signup">SignUp</Link></li>} */}
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;