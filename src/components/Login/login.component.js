import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
        };
    }

    componentDidMount = () => {
        this.setState({
            username: '',
            password: '',
        });
    }

    dismissError = () => {
        this.setState({ error: '' });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        this.setState({ error: '' });
        if (this.state.username === "user" && this.state.password === '123') {

            localStorage.setItem('username', this.state.username);
            localStorage.setItem('isAuthenticated', true);
            this.props.onAuthentication();
            this.props.history.push('/Product');
        }
        else {
            return this.setState({ error: 'Invalid Username or Password' });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        {
                            this.state.error &&
                            <h3 className='error' onClick={this.dismissError}>
                                <button onClick={this.dismissError}>✖</button>
                                {this.state.error}
                            </h3>
                        }
                        <label>Username: </label>
                        <input type="text" name="username" value={this.state.username}
                            onChange={(event) => this.handleChange(event)} /><br />

                        <label>Password: </label>
                        <input type="password" name="password" value={this.state.password}
                            onChange={(event) => this.handleChange(event)} /><br />
                        <input type="submit" value="Login" />
                        <div>Not a member?<br /><Link to="/signup">Sign Up</Link></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
