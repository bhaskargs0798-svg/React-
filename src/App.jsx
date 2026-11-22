
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import { lazy, Suspense } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <img
          src="/profile.jpg"
          alt="Bhaskar GS"
          loading="lazy"
          className="profile-photo"
        />

        <h1>Hi, I'm Bhaskar GS</h1>
        <h2>AI & Machine Learning Graduate</h2>

        <p>
          Aspiring Software Developer | React Developer |
          Python & Java Programmer
        </p>

        <a href="#projects" className="btn">
          Explore My Projects
        </a>
      </section>

      <Suspense fallback={<p>Loading section...</p>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>

      <footer>
        <p>© 2026 Bhaskar GS. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;