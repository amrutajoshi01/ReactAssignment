import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom' 
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

    signout = () => {
        this.setState({
            isAuthenticated: true,
        });
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
        if (this.state.username == "user" && this.state.password == 123) {
            this.props.onAuthentication();
            this.props.router.push('/Product');
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
        }

        else {
            return this.setState({ error: 'Invalid Username or Password' });
            this.props.history.push('/login');
        }
    }

    handleChange = (evt) => {
        console.log(evt.target.name);
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
