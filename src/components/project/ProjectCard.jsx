import { NavLink } from "react-router-dom";
import css from "./ProjectCard.module.css";

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  deployed,
  github,
}) => {
  return (
    <div className={css.card}>
      <img src={image} alt="error" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{ width: "100%", textAlign: "left" }}>
        <span
          style={{
            fontWeight: "bold",
            color: "rgb(235, 35, 35)",
          }}
        >
          Tech Stack:{" "}
        </span>
        <span>{techStack}</span>
      </div>
      <div className={css.button}>
        <a href={deployed}><button>View</button></a>
        <a href={github}>
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
