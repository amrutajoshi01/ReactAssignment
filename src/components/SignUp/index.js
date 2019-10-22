import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      confirm:'',
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

    if (name == "password") {
      if (value.length < 8) {
        errors["password"] = "Password must be at least 8 characters";
      }
      else
        errors["password"] = ''
    }

    if (name == "confirm") {
      if (this.state.password != value) {
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

    if (!this.state.name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof this.state.name !== "undefined") {
      if (!this.state.name.match(/^[ a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }

    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof this.state.email !== "undefined") {
      let lastAtPos = this.state.email.lastIndexOf('@');
      let lastDotPos = this.state.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
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
    
    return (
      <div id="signup">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name: </label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{this.state.errors["name"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password: </label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{this.state.errors["password"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="confirm">Confirm Password: </label>
            <input type="password" id="confirm" className="FormField__Input" placeholder="Confirm password" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{this.state.errors["confirm"]}</span>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address: </label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            <span style={{ color: "red" }}><br />{this.state.errors["email"]}</span>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} checked={this.state.hasAgreed} onChange={this.handleChange} /> I agree to the <a href="#" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" disabled={this.state.handleValidation}>Sign Up</button>
            {/*<Link to="/sign-in" className="FormField__Link">I'm already member</Link>*/}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignUp);