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
const toolsList=[
  {
    id: 1,
    image: "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
    title: "Git",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    title: "GitHub",
  },
  {
    id: 3,
    image: "https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png",
    title:"VS Code",
  },
  {
    id: 4,
    image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    title: "Postman",
  },
  {
    id: 5,
    image:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg",
    title:"Slack"
  }
]
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
      <h1>Tools</h1>
      <div className={css.Skills}>
        {toolsList.map((list) => {
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
