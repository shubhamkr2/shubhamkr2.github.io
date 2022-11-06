import GitHubCalendar from "react-github-calendar";
import css from "./Statitics.module.css"

function Statistics() {
  return (
    <div className={css.stats}>
      <div>
        <h1>
        GitHub Statistics and Contribution
        </h1>
      </div>
      <div>
        <div className={css.contribution}>
          <GitHubCalendar
            username="shubhamkr2"
            year={new Date().getFullYear()}
          />
        </div>
        <div>
          <a href="http://www.github.com/shubhamkr2">
            <img
              src="https://github-readme-stats.vercel.app/api?username=shubhamkr2&show_icons=true&hide=&count_private=true&title_color=10b981&text_color=000000&icon_color=ef4444&bg_color=ffffff&hide_border=true&show_icons=true"
              alt="shubhamkr2's GitHub stats"
            />
          </a>

          <a href="http://www.github.com/shubhamkr2">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=shubhamkr2&stroke=000000&background=ffffff&ring=10b981&fire=10b981&currStreakNum=000000&currStreakLabel=10b981&sideNums=000000&sideLabels=000000&dates=000000&hide_border=true" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Statistics;