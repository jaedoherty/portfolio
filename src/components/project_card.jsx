import React from "react";
import { useTrail, animated } from "react-spring";


const ProjectCard = (project) => {
    // project = Object.values(project)
    console.log(project)
      const trail = useTrail(project.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
      });
    return (

        <div className="project">
          <h3 className="project-header">{project.project.name}</h3>
          <div className="project-bio">{project.project.bio}</div>
          <img className="project-img" src={project.project.url} />
          <a
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            href={project.project.live}
          >
            Live Link
          </a>
          <a
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            href={project.project.git}
          >
            GitHub
          </a>
        </div>
    )
  };


export default ProjectCard;