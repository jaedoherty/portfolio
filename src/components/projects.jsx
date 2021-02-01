import React from 'react';
import { useSpring, animated } from "react-spring";

const Projects = () => {
        const props = useSpring({ x: 100, from: { x: 0 } });
    return (
      <div id="projects">
        <h1>Projects</h1>
        <div id="project-container">
          <div className="project">
            <h3 className="project-header">MatchStick</h3>
            <div className="project-bio">
              MatchStick is a clone of OkCupid, an online dating site. Uses
              Rails in the backend and React/Redux in the frontend.
            </div>
            <img className="project-img" src="matchstick.png" alt="" />
            <a href="https://jae-matchstick.herokuapp.com/">Live Link</a>
            <a href="https://github.com/jaedoherty/MatchStick">GitHub</a>
          </div>
          <div className="project">
            <h3 className="project-header">Daya</h3>
            <div className="project-bio">
              A more social take on the traditional calendar, built using the
              MERN stack.
            </div>
            <img className="project-img" src="daya.png" alt="" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://daya-mern.herokuapp.com/#/"
            >
              Live Link
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/deanmayne/daya"
            >
              GitHub
            </a>
          </div>
          <div className="project">
            <h3 className="project-header">Ghost Blaster</h3>
            <div className="project-bio">
              Ghost Blaster is an endless shooter game built with Vanilla
              JavaScript and HTML Canvas.
            </div>
            <img className="project-img" src="ghostblaster.png" alt="" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jaedoherty.github.io/GhostBlaster/"
            >
              Live Link
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jaedoherty/GhostBlaster"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
}

export default Projects;