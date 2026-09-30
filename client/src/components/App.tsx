import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from '../views/AboutMe.tsx';
import Skills from '../views/Skills.tsx';
import Projects from '../views/Projects.tsx';
import Games from '../views/Games.tsx';
import Interests from '../views/Interests.tsx';
import Qualifications from '../views/Qualifications.tsx';
import AuthButton from './AuthButton.tsx';

export default function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <header>
          <h1>Levi Taylor - Web Developer - Portfolio</h1>

          <nav>
            <p>
              <Link to="/">About Me</Link>
              <b> | </b>
              <Link to="/skills">Skills</Link>
              <b> | </b>
              <Link to="/qualifications">Qualifications</Link>
              <b> | </b>
              <Link to="/projects">Projects</Link>
              <b> | </b>
              <Link to="/games">Games</Link>
              <b> | </b>
              <Link to="/interests">Interests</Link>
            </p>
          </nav>

          <AuthButton />

          <hr />
          <div className="pikachu-track">
            <img src="/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running" />
          </div>
          <hr />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </main>

        <footer>
          <hr/>
            <div className="pikachu-track">
              <img src="/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running-flipped" />
            </div>
          <hr/>
          <a href="https://github.com/Levi-Taylor-Hotoke-26" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <img width="37px" src="/images/github-logo.png" alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/levi-thomas-taylor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <img width="29px" src="/images/linkedin-logo.png" alt="LinkedIn logo" />
          </a>
          <a href="https://nz.seek.com/profiles/levi-taylor-7gGVVN6NKD" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '5px' }}>
            <img width="29px" src="/images/seek-logo.png" alt="Seek logo" />
          </a>
        </footer>
      </div>
    </Router>
  );
}