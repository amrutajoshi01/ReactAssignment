import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Login from '../Login/login.component';
import ProductDisplay from '../ProductDisplay/productdisplay.component';
import Profile from '../Profile/profile.component';
import App from "../App/App.component";
import Navbar from '../Navbar/navbar.component';
import Cart from "../Cart/cart.component"
import SignUp from '../SignUp';
import Orders from '../Orders';
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

    displayCartCount = () => {
        return this.state.cartCount;
    }

    render() {
        const { user } = this.state;

        return (
            <div className="main" >
                <Router>
                    <Navbar isAuthenticated={this.state.isAuthenticated} onAuthentication={this.onAuthentication} displayCartCount={this.displayCartCount} />
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
                            <ProductDisplay isAuthenticated={this.state.isAuthenticated} addToCart={this.props.addToCart} />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/cart">
                            <Cart displayCartCount={this.displayCartCount} />
                        </Route>
                        <Route exact path="/orders">
                            <Orders />
                        </Route>
                    </Switch>
                </Router >
            </div >
        );
    }
}

export default MainComponent;