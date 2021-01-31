import React from 'react';
import { useSpring, animated } from "react-spring";

const Projects = () => {
        const props = useSpring({
          opacity: 1,
          from: { opacity: 0 },
        });
    return (
        <animated.div id="projects" style={props}>
            <h1>Projects</h1>
            <div className="project-container">MatchStick</div>
            <div className="project-container">Daya</div>
            <div className="project-container">Ghost Blaster</div>
        </animated.div>
    )
}

export default Projects;