import React, { Component } from "react";
import money from "../Media/dollar-symbol.svg";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="account">Account</div>
        <div className="transaction">
          <div className="payment">
            <button className="sendMoney">send</button>
            <div className="select">
              <select>
                <option>Example</option>
              </select>
            </div>
            <div>
              <img className="money" src={money} alt="" />
              <input className="dollarAmount" placeholder="USD" />
            </div>
            <div>from</div>
            <div className="select">
              <select>
                <option>Example</option>
              </select>
            </div>
          </div>
          <div className="transactionHistory">
            <div className="title">H I S T O R Y</div>
          </div>
        </div>
        <div className="friends">Friends</div>
      </div>
    );
  }
}

export default Dashboard;
