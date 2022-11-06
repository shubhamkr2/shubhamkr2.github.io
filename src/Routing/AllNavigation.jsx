// import { Routes, Route } from "react-router-dom";
// import AboutMe from "../components/about/AboutMe";
// import Contact from "../components/contact/Contact";
// import Home from "../components/home/Home";
// import Project from "../components/project/Project";
// import Resume from "../components/resume/Resume";
// import Skills from "../components/skills/Skills";

import { Link } from "react-scroll";

const AllNavigation = () => {
  return (
    <ul>
        <li>
          <Link to="home" >HOME</Link>
        </li>
        <li>
          <Link to="about">ABOUT</Link>
        </li>
        <li>
          <Link to="projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="skills">SKILLS</Link>
        </li>
        <li>
          <Link to="contact">CONTACT</Link>
        </li>
        <li>
          <a href="https://drive.google.com/u/0/uc?id=1Q3jiQzC6umXJF8DQfDoYP7hQbAzFtsGI&export=download">RESUME</a>
        </li>
      </ul>
  );
};

export default AllNavigation;
