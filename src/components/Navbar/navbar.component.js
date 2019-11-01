import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DropDown from '../DropDown/dropDown.component';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { cartCount, isAuthenticated, onAuthentication } = this.props;
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="left">
                        <li><Link to="/product"><img className="logo" src="../images/app-logo.jpg" alt="Shopping App"/></Link></li>
                        <li><input type="text" placeholder="Search" /> </li>
                    </ul>
                    <ul className="toggle">
                        {!isAuthenticated && <li ><Link to="/login">Login</Link></li>}
                        {!isAuthenticated && <li><Link to="/signup">Sign Up</Link></li>}
                        {isAuthenticated && <li id="dropDown"><DropDown onAuthentication={onAuthentication} /></li>}
                        {isAuthenticated && <li id="cartIcon"><Link to="/cart"><i className="fa fa-shopping-cart">{cartCount !== 0 ? (cartCount) : (null)}</i></Link></li>}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartReducer.cartCount
    }
}
export default connect(mapStateToProps)(Navbar);