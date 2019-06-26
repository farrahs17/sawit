import React from "react";
import Login from "./login.js";
// import Nav from "./nav.js";
// import Search from "./search.js";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header-container">
          <h1>Fireit</h1>
        </div>
        <Login />
      </div>
    );
  }
}

export default Header;
