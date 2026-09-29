import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from '../views/Projects.tsx';
import Skills from '../views/Skills.tsx';

export default function App() {
  return (
    <Router>
      <div className="portfolio-app">
        {/* Persistent Header */}
        <header>
          <h1>Levi Taylor - Web Developer</h1>
          <h2>This is my portfolio for my coding projects!</h2>

          <hr />
          {/* Navigation links using Router Links */}
          <nav>
            <p>
              <Link to="/">About Me</Link>
              <b> | </b>
              <Link to="/skills">Skills</Link>
              <b> | </b>
              <Link to="/projects">Projects</Link>
              <b> | </b>
              <Link to="/games">Games</Link>
            </p>
          </nav>
          <hr />

          {/* Running Pikachu */}
          <div className="pikachu-track">
            <img src="/client/public/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running" />
          </div>
          <hr />
        </header>

        {/* Dynamic Main Content Area that changes based on route */}
        <main>
          <Routes>
            <Route path="/" element={
              <section id="about-me">
                <img width="150px" height="auto" src="/client/public/images/179357454.png" alt="an image of me" />
                <p>
                  I'm a web developer with a background in customer service and a passion for gaming...
                  {/* (Your full about me text here) */}
                </p>
              </section>
            } />
            
            <Route path="/skills" element={
              <section id="skills">
                <h3>Skill Stack</h3>
                <Skills/>
              </section>
            } />

            <Route path="/projects" element={<Projects />} />
            <section id="projects">
              <h3>Projects</h3>
              <Projects/>
            </section>

            <Route path="/games" element={
              <section id="games">
                <h3>Games</h3>
                {/* Your iframe game components here */}
              </section>
            } />
          </Routes>
        </main>

        <hr />
        <hr />

        {/* Persistent Footer */}
        <footer>
          <a href="https://github.com/Levi-Taylor-Hotoke-26" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <img width="37px" src="/client/public/images/github-logo.png" alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/levi-thomas-taylor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <img width="29px" src="/client/public/images/linkedin-logo.png" alt="LinkedIn logo" />
          </a>
          <a href="https://nz.seek.com/profiles/levi-taylor-7gGVVN6NKD" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '5px' }}>
            <img width="29px" src="/client/public/images/seek-logo.png" alt="Seek logo" />
          </a>
        </footer>
      </div>
    </Router>
  );
}