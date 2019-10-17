import React, { Component } from 'react';
import './navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Login from '../Login/login.component';
import ProductDisplay from '../ProductDisplay/productdisplay.component';
import MainComponent from '../MainComponent/mainComponent.component'
import DropDown from '../DropDown/dropDown.component';
class Navbar extends Component {
    render() {
        return (          
            <Router>
                <nav className="nav-wrapper">
                    <div className="container">
                        <ul className="right">
                            <li><Link to="/" className="brand-logo">Shopping</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><input type="text" placeholder="Search" /> </li>
                        </ul>
                        <ul className="toggle">
                            <li ><Link to="/login">Login</Link></li>
                            <li><DropDown/></li>
                        </ul>

                    </div>
                </nav>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductDisplay} />
                    <Route path="/profile" component={MainComponent} />
                    <Route path="/signup" component={About} />
                </Switch>
            </Router>
        )
    }
}
export default Navbar;
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
