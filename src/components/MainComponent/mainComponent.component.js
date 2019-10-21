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
import SignUp from '../SignUp/old';

import { Provider as AlertProvider } from 'react-alert'

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

    componentDidMount = () =>{
        this.setState({
            isAuthenticated: localStorage.getItem('isAuthenticated')
        });
    }

    onAuthentication = (value) => {
        this.setState({
            isAuthenticated: value,
        });
        localStorage.setItem('isAuthenticated', value);
    }

    displayCartCount = (cartCount) => {
        return cartCount;
    }

    

    render() {
        const { user } = this.state;

        console.log('MainComponent: isAuthenticated: ' + this.state.isAuthenticated);
        return (
            <div className="main" >
                {/* <Router> */}
                    {/* <Navbar onAuthentication={this.onAuthentication} displayCartCount={this.displayCartCount} /> */}
                    <Navbar isAuthenticated={this.isAuthenticated} displayCartCount={this.displayCartCount} />
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
                            <ProductDisplay isAuthenticated={this.state.isAuthenticated}/>
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                    </Switch>
                    <Cart displayCartCount={this.displayCartCount} />
                {/* </Router > */}
            </div >
        );
    }
}

export default MainComponent;