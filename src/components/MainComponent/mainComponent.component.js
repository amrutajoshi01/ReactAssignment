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

import "./mainComponent.css"
class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'user',
                dob: '01/01/1997',
                contact: '11111111',
                userImg: "../images/user.jpg"
            },
            isAuthenticated: false,
        }
    }

    onAuthentication = () =>{
        
    }

    render() {
        const { user } = this.state;
        const { isAuthenticated } = this.state;
        console.log('isAuthenticated: ' + this.state.isAuthenticated);
        return (
            <div className="main" >
                <Router>
                    <Navbar {...isAuthenticated} />
                    <Switch>
                        <Route exact path="/profile">
                            <Profile {...user} />
                        </Route>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route exact path="/login">
                            <Login isAuthenticated={this.state.isAuthenticated} />
                        </Route>
                        <Route exact path="/product">
                            <ProductDisplay />
                        </Route>
                    </Switch>
                </Router >
            </div >
        );
    }
}

export default MainComponent;