import React, { Component } from "react";
import ProjectCard from "./projectCard";
import { CardGroup } from "react-bootstrap";
import computational_graph from "./images/computational_graph.jpg";
import react_logo from "./images/react_logo.jpg";
import msg_bubble from "./images/msg_bubble.jpg";
import space_invaders from "./images/space_invaders.png";
import "./project.css";

class Projects extends Component {
  // Original Code is in projects_orig.js

  render() {
    /* declare var let const; java version of int; making objects */
    /*int [] a= [apple, peach, nuall]*/
    const project = {
      0: {
        title: "MyAutoDiff",
        text: " any text ",
        img: computational_graph
      },
      1: {
        title: "React JS Website",
        text: "any text",
        img: react_logo
      },
      2: { title: "b", text: "any text", img: msg_bubble },
      3: {
        title: "i",
        text: "any",
        img: space_invaders
      }
    };

    const projectCards = Object.values(project).map((project) => (
      /*map takes unique key and iterates, used only on arrays but we have object so make it array using objectvalues*/
      <ProjectCard
        title={project.title}
        text={project.text}
        img={project.img}
      />
    ));

    /*html*/
    return (
      <div className="project" id="projects">
        <h1>Projects </h1>
        <CardGroup>{projectCards} </CardGroup>
        /*card hold infor for each project*/
      </div>
    );
  }
}

export default Projects;
