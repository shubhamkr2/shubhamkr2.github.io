import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home} id="home">
      <div className={css.text}>
        <h2>Hi, my name is</h2>
        <h1 className={css.name}>Shubham Kumar</h1>
        <h1 className={css.des}>I'm a Full Stack Web Developer</h1>
      </div>
      <div className={css.profile}>
        <img
          src="https://github.com/shubhamkr2/UploadImages/blob/main/Profile%20(1).png?raw=true"
          alt="Shubham pic"
        />
      </div>
    </div>
  );
};

export default Home;
