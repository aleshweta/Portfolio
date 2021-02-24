import React, { Component } from "react";
import manSit from "./manOnTable.svg";
import "./aboutMe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

class AboutMe extends Component {
  //Original code can be found in aboutMe_orig.js */

  render() {
    return (
      <div className="aboutMe-section" id="aboutMe">
        <div className="short-bio">
          <div className="short-bio-text">
            <h1> Hi I'm shweta</h1>
            <p>ggjldjgkjf</p>
            <Button href=""> See my resume</Button>
            <div className="dev-icon">
              <p className="dev-icons- subtitle">Check out my tech stack</p>
              <FaHtml5 />
              <FaCss3Alt />
              <FaPython />
              <FaJava />
            </div>
          </div>
          <div>
            <img className=" short-bio-img" alt="man sitting" src={manSit} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
