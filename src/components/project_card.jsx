import React from "react";
// import { useTrail} from "react-spring";


const ProjectCard = (project) => {

    return (

        <div className="project">
          <h3 className="project-header">{project.project.name}</h3>
          <div className="project-bio">{project.project.bio}</div>
          <img className="project-img" src={project.project.url} alt=""/>
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