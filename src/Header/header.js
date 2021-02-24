import logo from "./logo.png";
import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  // Original code in header_orig.js

  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <img src={logo} alt="logo" />
          <div className="nav-sections">
            <a href="#aboutMe"> About Me </a>
            <a href="#projecs"> Projects</a>
            <a href="#skills"> Skills</a>
          </div>
        </div>
        <div className="center-text">
          <h1 className="title">CODER GIRL</h1>
          <h1 className="name"> &lt; SHWETA ALE /&lt;</h1>
        </div>
      </div>
    );
  }
}

export default Header;
