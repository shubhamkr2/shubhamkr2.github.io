import css from "./Project.module.css";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    id: 1,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/Screenshot%20(1427).png?raw=true",
    title: "Anthropologie-Project",
    description:
      "This is my first group project a clone of the Anthropologie website. it is a Fashion and Life-style ecommerce website. we made this clone with HTML, JavaScript, CSS",
    techStack: "HTML | CSS | JavaScript",
    dep_link: "https://anthropologie-project-cv7a.vercel.app",
    git_link: "https://github.com/Abrar2003/Anthropologie-Project",
  },
  {
    id: 2,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/Screenshot%20(1456).png?raw=true",
    title: "MyNetDiary-Project",
    description:
      "MyNetDiary is a digital diet assistant for weight loss with accurate calorie counting, forecasting and personalized daily insights.",
    techStack: "HTML | CSS | JavaScript",
    dep_link: "https://admirable-heliotrope-39fc31.netlify.app/",
    git_link: "https://github.com/shubhamkr2/MyNetDiary-Project",
  },
  {
    id: 3,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/Screenshot%20(1457).png?raw=true",
    title: "Buffer-Project",
    description:
      "Buffer is a multi-purpose social media marketing website. It allow us to draft and schedule posts for sharing across multiple social networks.",
    techStack: "ReactJs | Chakra-UI | HTML | CSS | JavaScript",
    dep_link: "https://buffer-website-clone.vercel.app/",
    git_link: "https://github.com/shubhamkr2/Buffer-Project",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/Screenshot%20(1752).png",
    title: "Dot-Key-Project",
    description:
      "Dot & Key is an award-winning skincare company established to transform the idea of 'skincare' into a fun, easy, and acceptable notion.",
    techStack: "ReactJs | JavaScript | NodeJs | ExpressJs | MongoDB",
    dep_link: "https://dot-and-key-project-gppf.vercel.app/",
    git_link: "https://github.com/shubhamkr2/dot-and-key-project",
  },
];

const Project = () => {
  return (
    <div className={css.projectContainer} id="projects">
      <h1>Project</h1>
      <div className={css.projects}>
        {projectList.map((list) => {
          return (
            <ProjectCard
              image={list.image}
              title={list.title}
              description={list.description}
              techStack={list.techStack}
              deployed={list.dep_link}
              github={list.git_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
