import React, { Component } from "react";
import money from "../Media/dollar-symbol.svg";
import profile from "../Media/man-user.svg";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      clientId: "5c86a2b4eaf3f3006691f354",
      friends: "",
      nodes: ""
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.getFriends();
    this.getTransactions();
    this.getNodes();
  }
  getFriends() {
    axios.get("/api/user/getallusers").then(users => {
      this.setState({ friends: users.data.users });
    });
  }
  getTransactions() {
    axios.get(`/api/users/${this.state.clientId}/getusertrans`).then(trans => {
      this.setState({ trans: trans.data });
    });
  }
  getNodes() {
    axios.get(`/api/users/${this.state.clientId}/getallnodes`).then(nodes => {
      this.setState({ nodes: nodes.data });
    });
  }
  render() {
    let friends =
      this.state.friends &&
      this.state.friends.map(el => {
        if (el.documents.length) {
          return (
            <div key={el._id}>
              <p>{el.legal_names[0]}</p>
              <img className="friendIcon" src={profile} alt="" />
            </div>
          );
        }
      });
    let payFriend =
      this.state.friends &&
      this.state.friends.map(el => {
        if (el.documents.length) {
          return (
            <option value={el._id} key={el._id}>
              {el.legal_names[0]}
            </option>
          );
        }
      });
    let accounts = this.state.nodes.length ? (
      this.state.nodes.map(el => {
        return <div>{el.info.nickname}</div>;
      })
    ) : (
      <div>No Accounts</div>
    );
    let payFromAccount = this.state.nodes.length ? (
      this.state.nodes.map(el => {
        return <option value={el._id}>{el.info.nickname}</option>;
      })
    ) : (
      <option>No Accounts</option>
    );
    return (
      <div className="Dashboard">
        <div className="account">
          {accounts}
          <div>
            <input placeholder="Account Nickname" />
          </div>
          <button>Create an Account</button>
        </div>
        <div className="transaction">
          <div className="payment">
            <button className="sendMoney">send</button>
            <div className="select">
              <select>{payFriend}</select>
            </div>
            <div>
              <img className="money" src={money} alt="" />
              <input className="dollarAmount" placeholder="USD" />
            </div>
            <div>from</div>
            <div className="select">
              <select>{payFromAccount}</select>
            </div>
          </div>
          <div className="transactionHistory">
            <div className="title">H I S T O R Y</div>
          </div>
        </div>
        <div className="friends">
          <h1>FRIENDS</h1>
          {friends}
        </div>
      </div>
    );
  }
}

export default Dashboard;
