import React from "react";
import { useSpring, animated } from "react-spring";

const About = () => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
    });
  return (
    <div id="about">
      <h1 id="about-header">About Me</h1>

      <animated.div id="about-bio" style={props}>
        <div id="about-img">
          <img id="self-img" src="jae_doherty.jpg" alt="self-img" />
          <div>Jae Doherty</div>
          <div>Software Engineer</div>
          <button id="about-button">View Resume</button>
        </div>
        <div id="about-description">
          <div id="p1">
            I may not have started in design but I am proud to call myself a
            Software Engineer with a passion for the frontend. From React/Redux
            to Javascript, if I can style it I am all about it. I love learning
            about new and clever ways to implement CSS into my projects and join
            in on the creativity; but I also like to get my hands dirty working
            with the components themselves to own the frontend from development
            to design. One of my favorite projects I have worked on recently,
            was a full-stack rendition of OkCupid that I call Matchstick; which
            allowed me to show off my creative skills while still flexing my
            backend knowledge in Ruby on Rails.
          </div>
          <div id="p1">
            In my off time, I make a mean chicken katsu sandwich, play piano,
            and hone my skills as the go-to makeup artist for my friends; not at
            the same time, of course!
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default About;

