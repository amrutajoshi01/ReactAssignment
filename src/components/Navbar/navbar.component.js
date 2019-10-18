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
            showMenuItems: true,
        }
    }

    componentDidMount = () =>{
        document.getElementById('cartIcon').innerHTML += this.props.cartCountIncrement();
    }

    render() {
        console.log('navbar')
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
                            {this.state.showMenuItems && <li ><Link to="/login">Login</Link></li>}
                            {this.state.showMenuItems && <li><DropDown /></li>}
                            <li id="cartIcon"><i className="fa fa-shopping-cart"></i></li>
                        </ul>
                    </div>
                </nav>
        )
    }
}
export default Navbar;