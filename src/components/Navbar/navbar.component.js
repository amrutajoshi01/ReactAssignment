import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartCount } from '../../actions/cartActions';
import DropDown from '../DropDown/dropDown.component';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let cartCount = this.props.cartCount;
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
                        {!this.props.isAuthenticated && <li ><Link to="/login">Login</Link></li>}
                        {this.props.isAuthenticated && <li><DropDown onAuthentication={this.props.onAuthentication} /></li>}
                        {this.props.isAuthenticated && <li id="cartIcon"><Link to="/cart"><i className="fa fa-shopping-cart">{cartCount!==0?(cartCount):(null)}</i></Link></li>}
                    </ul>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount
    }
}
export default connect(mapStateToProps)(Navbar);