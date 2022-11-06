import css from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div id="about">
      <h1 className={css.title} >All About Me</h1>
      <div className={css.about} >
        <div>
          <img
            src="https://i.pinimg.com/originals/27/9d/a0/279da0eddd5cf914d29ec923e837e3fe.gif"
            alt="pic"
          />
        </div>
        <div>
          <p>
          Aspiring full-stack web developer, Self-motivated and proficient in creating user-centric products as per the business need, Looking for a role in a growth-oriented organization to contribute towards the goal and vision of the organization. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
