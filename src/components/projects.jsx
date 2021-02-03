import React from "react";
import ProjectCard from "./project_card";
import { useTrail, animated } from "react-spring";

const PROJECTS = [
  {
    name: "MatchStick",
    bio:
      "MatchStick is a clone of OkCupid, an online dating site. Uses Rails in the backend and React/Redux in the frontend.",
    url: "matchstick.png",
    live: "https://jae-matchstick.herokuapp.com/",
    git: "https://github.com/jaedoherty/MatchStick",
  },
  {
    name: "DAYA",
    bio:
      " A more social take on the traditional calendar, built using the MERN stack.",
    url: "daya.png",
    live: "http://daya-mern.herokuapp.com/#/",
    git: "https://github.com/deanmayne/daya",
  },
  {
    name: "Ghost Blaster",
    bio:
      "Ghost Blaster is an endless shooter game built with Vanilla JavaScript and HTML Canvas.",
    url: "ghostblaster.png",
    live: "https://jaedoherty.github.io/GhostBlaster/",
    git: "https://github.com/jaedoherty/GhostBlaster",
  },
];
const Projects = () => {
  const trail = useTrail(PROJECTS.length, {
    from: { opacity: 0, mass: 0 },
    to: { opacity: 1, mass: 1 },
  });

  // returns an array of animated values which you can iterate over
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div id="project-container">
        {trail.map((project, index) => {
          return (
            <animated.div className="project-container"
            key={index}
            style={{
              ...project
            }}
            >
              <ProjectCard project={PROJECTS[index]} />
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
