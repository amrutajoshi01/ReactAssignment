import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DropDown from '../DropDown/dropDown.component';
import { getProductsRequest } from '../../actions/productsActions'
import './navbar.css';

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    setSearchText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onKeyUp = (event) => {
        if (event.charCode === 13) {
            this.props.searchProducts(this.state.searchText);
        }
      }

    render() {
        let { cartCount, isAuthenticated, onAuthentication } = this.props;
        const { searchText } = this.state;
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="left">
                        <li><Link to="/product"><img className="logo" src="../images/app-logo.jpg" alt="Shopping App"/></Link></li>
                        <li><input type="text" name="searchText" value={this.state.searchText} placeholder="Search" onChange={(event) => this.setSearchText(event)}
                            onKeyPress={(event) => this.onKeyUp(event)}/> </li>
                    </ul>
                    <ul className="toggle">
                        {!isAuthenticated && <li ><Link to="/login">Login</Link></li>}
                        {!isAuthenticated && <li><Link to="/signup">Sign Up</Link></li>}
                        {isAuthenticated && <li id="dropDown"><DropDown onAuthentication={onAuthentication} /></li>}
                        {isAuthenticated && <li id="cartIcon"><Link to="/cart"><i className="fa fa-shopping-cart">{cartCount !== 0 ? (cartCount) : (null)}</i></Link></li>}
                        <li ><Link to="/categories">Categories</Link></li>
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
const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: (searchText) => { dispatch(getProductsRequest({ page: 0, limit: 8, searchText: searchText })) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);