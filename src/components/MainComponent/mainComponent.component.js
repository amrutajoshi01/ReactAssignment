import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from '../Login/login.component';
import ProductDisplay from '../ProductDisplay/productdisplay.component';
import Profile from '../Profile/profile.component';
import App from "../App/App.component";
import Navbar from '../Navbar/navbar.component';
import Cart from "../Cart/cart.component"
import SignUp from '../SignUp';

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
            cartCount: 0
        }

    }

    componentDidMount = () => {
        this.setState({
            isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
        });
    }

    onAuthentication = () => {
        this.setState({
            isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
        });
    }

    displayCartCount = (cartCount) => {
        this.setState({ cartCount: cartCount });
    }

    incrementCartCount = () => {
        this.setState({ cartCount: this.state.cartCount + 1 });
    }



    render() {
        const { user } = this.state;

        console.log('MainComponent: isAuthenticated: ' + this.state.isAuthenticated);
        return (
            <div className="main" >
                <Router>
                    <Navbar isAuthenticated={this.state.isAuthenticated} onAuthentication={this.onAuthentication} cartCount={this.state.cartCount} />
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
                            <ProductDisplay isAuthenticated={this.state.isAuthenticated} incrementCartCount={this.incrementCartCount} />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/cart">
                            <Cart displayCartCount={this.displayCartCount} ref={this.cartElement} />
                        </Route>
                    </Switch>
                </Router >
            </div >
        );
    }
}

export default MainComponent;