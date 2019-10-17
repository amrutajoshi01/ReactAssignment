import React, { Component } from 'react';
import  style from "./profile.module.css"

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const username = localStorage.getItem('username');
        return (
            <div className={style.profile}>
                <img src={this.props.userImg} alt={this.props.name} />
                <p id="uName">{username}</p>
                <p className="details">Date of Birth: {this.props.dob}</p>
                <p className="details">Contact: {this.props.contact}</p>
            </div>
        );
    }
}

export default Profile;