import React, { Component } from "react";
import phone from "../Media/call.svg";
import mail from "../Media/close-envelope.svg";
import profile from "../Media/man-user.svg";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <img
          className="loginLogo"
          src={
            "https://lever-client-logos.s3.amazonaws.com/16dff1b6-769e-4d60-9543-f53b90cdc26a-1548987132030.png"
          }
          alt=""
        />
        <div className="loginInputs">
          <form className="loginForm">
            <div>
              <img className="logo profile" src={profile} alt="" />
              <input className="logininput" placeholder="Full Name" />
            </div>
            <div>
              <img className="logo mail" src={mail} alt="" />
              <input className="logininput" placeholder="Email" type="email" />
            </div>
            <div>
              <img className="logo phone" src={phone} alt="" />
              <input
                className="logininput"
                placeholder="Phone Number"
                type="password"
              />
            </div>
            <button className="createUser">Create User</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
