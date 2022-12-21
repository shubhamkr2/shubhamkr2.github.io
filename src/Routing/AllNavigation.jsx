import { Link } from "react-scroll";

const AllNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="home">HOME</Link>
      </li>
      <li>
        <Link to="about">ABOUT ME</Link>
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
        <a href="https://drive.google.com/u/0/uc?id=1Q3jiQzC6umXJF8DQfDoYP7hQbAzFtsGI&export=download">
          RESUME
        </a>
      </li>
    </ul>
  );
};

export default AllNavigation;
