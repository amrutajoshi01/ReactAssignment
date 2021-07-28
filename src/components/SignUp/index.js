import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confirm: '',
      email: '',
      hasAgreed: false,
      errors: {}
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    let errors = {};

    if (name === "password") {
      if (value.length < 8) {
        errors["password"] = "Password must be at least 8 characters";
      }
      else
        errors["password"] = ''
    }

    if (name === "confirm") {
      if (this.state.password !== value) {
        errors["confirm"] = "Password not matching";

      }
      else
        errors["confirm"] = ''
    }

    this.setState({
      [name]: value,
      errors: errors
    });
  }

  handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    let { name, password, confirm, email, hasAgreed } = this.state;
    if (!this.state.name) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }
    else if (typeof name !== "undefined") {
      if (!this.state.name.match(/^[ a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Please enter only letters";
      }
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }
    else if (password.length < 8) {
      formIsValid = false;
      errors["password"] = "Password must be at least 8 characters";   
    }
    else if (password !== confirm) {
      formIsValid = false;
      errors["confirm"] = "Password not matching";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }
    else if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    if (!hasAgreed)
      formIsValid = false;

    this.setState({ errors: errors });
    
    return formIsValid;
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      this.setState({
        email: '',
        password: '',
        confirm: '',
        name: '',
        hasAgreed: false,
      });
      this.props.history.push('/login');
    }
  }

  render() {
    let { name, password, confirm, email, hasAgreed, errors } = this.state;
    return (
      <div id="signup">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name: </label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={name} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{errors["name"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password: </label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter password" name="password" value={password} onChange={this.handleChange} onInput={this.handleInput} />
            <span style={{ color: "red" }}><br />{errors["password"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="confirm">Confirm Password: </label>
            <input type="password" id="confirm" className="FormField__Input" placeholder="Confirm password" name="confirm" value={confirm} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{errors["confirm"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address: </label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{errors["email"]}</span>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={hasAgreed} checked={hasAgreed} onChange={this.handleChange} /> I agree to the <a href="#" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="submit" disabled={!hasAgreed}>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignUp);