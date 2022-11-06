// import "./App.css";
import AboutMe from "./components/about/AboutMe";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
// import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Statistics from "./components/statics/Statistics";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <Statistics />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
