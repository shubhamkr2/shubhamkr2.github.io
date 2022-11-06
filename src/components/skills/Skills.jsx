import css from "./Skills.module.css";

const SkillList = [
  {
    id: 1,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/HTML.png?raw=true",
    title: "HTML",
  },
  {
    id: 2,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/CSS%20logo.png?raw=true",
    title: "CSS",
  },
  {
    id: 3,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/JavaScript-logo.png?raw=true",
    title: "JavaScript",
  },
  {
    id: 4,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/Reactlogo.png?raw=true",
    title: "React",
  },
  {
    id: 5,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/Redux%20logo.png?raw=true",
    title: "Redux",
  },
  {
    id: 6,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/chakra-ui%20logo.png?raw=true",
    title: "Chakra UI",
  },
  {
    id: 7,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/nodejs-logo.png?raw=true",
    title: "nodeJs",
  },
  {
    id: 8,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/expressjs_logo.png?raw=true",
    title: "ExpressJs",
  },
  {
    id: 9,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/mongodb%20logo.png?raw=true",
    title: "MongoDB",
  },
  {
    id: 10,
    image:
      "https://github.com/shubhamkr2/UploadImages/blob/main/mongoose%20logo.jpg?raw=true",
    title: "Mongoose",
  },
];

const Skills = () => {
  return (
    <div className={css.Skills_container} id="skills">
      <h1>My Technical Skills</h1>
      <div className={css.Skills}>
        {SkillList.map((list) => {
          return (
            <div>
              <img src={list.image} alt="error" />
              <h4>{list.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
