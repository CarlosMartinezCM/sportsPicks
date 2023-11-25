import React from 'react';
import AppMode from './../AppMode.js';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.emailInputRef = React.createRef();
    }

    //This will focus the cursor on the email input fied when mounted. 
    componentDidMount() {
        this.emailInputRef.current.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.changeMode(AppMode.HOMEPAGE)
        this.props.setUserID(this.emailInputRef.current.value);
    }

    render() {
        return(
        <div id="login-mode-div" className="padded-page">
        <center>
            <form id="loginInterface" onSubmit={this.handleSubmit}>
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Email:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="Enter Email Address"
                id="emailInput"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="passwordInput" style={{ padding: 0, fontSize: 24 }}>
                Password:
                <input
                className="form-control login-text"
                type="password"
                placeholder="Enter Password"
                pattern="[A-Za-z0-9!@#$%^&*()_+\-]+"
                required={true}
                />
            </label>
            <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                type="submit"
                className="btn-color-theme btn btn-primary btn-block login-btn">
                <span id="login-btn-icon" className="fa fa-sign-in"/>
                &nbsp;Log In
            </button>
            <br />
            <a role="button" className="login-btn">
                <img src="./../images/GoogleIconDark.svg" alt="Google loginICON" />
            </a>
            <a role="button" className="login-btn">
                <img src="./../images/facebook-login-icon-download-8.jpg" height="40px"
          width="200px" alt="Facebook loginICON" />
            </a>
            <p>
                <i>Version 1.0</i>
            </p>
            <p>
                <i>Login</i>
            </p>
            </form>
        </center>
        </div>
        )
    }
}

export default LoginPage;
