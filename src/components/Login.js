import React, { Component } from "react";
import phone from "../Media/call.svg";
import mail from "../Media/close-envelope.svg";
import profile from "../Media/man-user.svg";
import axios from "axios";
import Dashboard from "./Dashboard";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      fullName: "",
      email: "",
      phone: ""
    };
  }
  handleChange(key, e) {
    this.setState({ [key]: e.target.value });
  }
  createUser(e) {
    e.preventDefault();
    const { fullName, email, phone } = this.state;
    axios
      .post("/api/user/createuser", {
        name: fullName,
        email,
        phoneNumbers: phone
      })
      .then(user => {
        console.log(user.data.body);
        this.setState({ user: user.data.body });
      });
  }
  render() {
    console.log(this.state);
    return !this.state.user ? (
      <div className="Login">
        <img
          className="loginLogo"
          src={
            "https://lever-client-logos.s3.amazonaws.com/16dff1b6-769e-4d60-9543-f53b90cdc26a-1548987132030.png"
          }
          alt=""
        />
        <div className="loginInputs">
          <form className="loginForm" onSubmit={e => this.createUser(e)}>
            <div>
              <img className="logo profile" src={profile} alt="" />
              <input
                className="logininput"
                placeholder="Full Name"
                onChange={e => this.handleChange("fullName", e)}
              />
            </div>
            <div>
              <img className="logo mail" src={mail} alt="" />
              <input
                className="logininput"
                placeholder="Email"
                type="email"
                onChange={e => this.handleChange("email", e)}
              />
            </div>
            <div>
              <img className="logo phone" src={phone} alt="" />
              <input
                className="logininput"
                placeholder="Phone Number"
                type="tel"
                onChange={e => this.handleChange("phone", e)}
              />
            </div>
            <input className="createUser" type="submit" value="Create User" />
          </form>
        </div>
      </div>
    ) : (
      <Dashboard user={this.state.user} />
    );
  }
}

export default Login;
