import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from '../views/AboutMe.tsx'; // You can extract your About section into this view too!
import Skills from '../views/Skills.tsx';
import Projects from '../views/Projects.tsx';
import Games from '../views/Games.tsx';

export default function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <header>
          <h1>Levi Taylor - Web Developer</h1>
          <h2>This is my portfolio for my coding projects!</h2>

          <hr />
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

          <div className="pikachu-track">
            <img src="/client/public/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running" />
          </div>
          <hr />
        </header>

        {/* Dynamic Route Switching */}
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>

        <hr />
        <hr />

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