import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Login from '../Login/login.component';
import ProductDisplay from '../ProductDisplay/productdisplay.component';
import Profile from '../Profile/profile.component';
import App from "../App/App.component";
import Navbar from '../Navbar/navbar.component';
import Cart from "../Cart/cart.component"

import "./mainComponent.css"
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'user',
                dob: '01/01/1997',
                contact: '11111111',
                userImg: "../images/user.jpg",
            },
            isAuthenticated: false,
        }
    }

    onAuthentication = () => {
        this.setState({
            isAuthenticated: true,
        });
    }

    cartCountIncrement = () => {
        return 1;
    }

    render() {
        const { user } = this.state;


        console.log('isAuthenticated: ' + this.state.isAuthenticated);
        return (
            <div className="main" >
                <Router>
                    <Navbar onAuthentication={this.onAuthentication} cartCountIncrement={this.cartCountIncrement} />
                    <Switch>
                        <Route exact path="/profile">
                            <Profile {...user} />
                        </Route>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route exact path="/login">
                            <Login onAuthentication={this.onAuthentication} />
                        </Route>
                        <Route exact path="/product">
                            <ProductDisplay />
                        </Route>
                    </Switch>
                    <Cart getCartCount={this.cartCountIncrement} />
                </Router >
            </div >
        );
    }
}

export default MainComponent;