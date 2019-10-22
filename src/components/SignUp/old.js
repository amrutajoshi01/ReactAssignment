import React, { useState } from 'react';
//import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
const SignUp = (props) => {

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
    });


    function handleChange(event) {
        setUserInfo({...userInfo,
            [event.target.name]: event.target.value
        })
        console.log(event.target.name);
    }

    function validateForm(){
        alert(userInfo.username + userInfo.email + userInfo.password);
    }

    // render() {
    return (
        <form id="signup" onSubmit={validateForm}>
            <input type="text" name="username" placeholder="First Name" value={userInfo.username} onChange={handleChange} /><br />
            <input type="email" name="email" placeholder="Email" value={userInfo.email} onChange={handleChange} /><br />
            <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange} /><br />
            <button id="send" type="submit" >Sign Up</button>
        </form>
    );
    // }
}

//export default withRouter(SignUp);
export default SignUp;