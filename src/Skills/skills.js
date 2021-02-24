import React, { Component } from "react";

import "./skills.css";
class Skills extends Component {
  // ORIGINAL CODE IN skills_orig.js

  render() {
    return (
      <div className="skills " id="skills">
        <div className="skills-title">
          <h1> Skills Proficiency</h1>
        </div>
        <div className="skills-section">
          <div className="bar">
            <div className="info">
              <span>HTML/CSS</span>
            </div>
            <div className=" progress-bar web">
              <span></span>
            </div>
          </div>
          /*html*/
          <dive className="bar">
            <div className="info">
              <span>HTML/CSS</span>
            </div>
            <div className=" progress-bar java">
              <span></span>
            </div>
            /*java*/
            <div className="bar">
              <div className="info">
                <span>HTML/CSS</span>
              </div>
              <div className=" progress-bar python">
                <span></span>
              </div>
            </div>
            /*python*/
            <div className="bar">
              <div className="info">
                <span>HTML/CSS</span>
              </div>
              <div className=" progress-bar web">
                <span></span>
              </div>
            </div>
            /*c++/
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
