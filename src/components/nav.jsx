import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/">
        <div className="nav-link">About</div>
      </Link>
      <Link to="/projects">
        <div className="nav-link">Projects</div>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        href="https://github.com/jaedoherty"
      >
        <div>GitHub</div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        href="https://www.linkedin.com/in/jae-doherty/"
      >
        <div>LinkedIn</div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        href="https://angel.co/u/jae-doherty"
      >
        <div>AngelList</div>
      </a>
    </div>
  );
};

export default Nav;
