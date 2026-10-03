import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutMe from '../views/AboutMe.tsx';
import CV from '../views/CV.tsx';
import Projects from '../views/Projects.tsx';
import Games from '../views/Games.tsx';
import Qualifications from '../views/Qualifications.tsx';
import AuthButton from './AuthButton.tsx';
import ContactMe from '../views/ContactMe.tsx';
import BackToTop from './BackToTop.tsx';
import CursorController from './CursorController.tsx';

<CursorController />

export default function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <header>
          <div className="auth">
            <AuthButton />
          </div>
          <div className="header-content">
            <div className="header-left">
              <img width="150px" height="auto" src="/images/179357454.png" alt="an image of me" />
            </div>

            <div className="header-right">
              <h1>Levi Taylor - Web Developer</h1>
            </div>

          </div>
          <hr />
          <div className="pikachu-track">
            <img src="/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running" />
            <nav>
              <p>
                <Link to="/" className="nav-default">About Me</Link>
                <b> | </b>
                <Link to="/CV" className="nav-cv">Curriculum Vitae</Link>
                <b> | </b>
                <Link to="/qualifications" className="nav-qualifications">Qualifications</Link>
                <b> | </b>
                <Link to="/projects" className="nav-projects">Projects</Link>
                <b> | </b>
                <Link to="/games" className="nav-games">Games</Link>
                <b> | </b>
                <Link to="/contact-me" className="nav-contact">Contact Me</Link>
              </p>
            </nav>
          </div>
          <hr />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </main>

        <footer>
          <hr />
          <div className="pikachu-track">
            <img src="/images/pikachu-running.gif" alt="Pikachu running" className="pikachu-running-flipped" />

            <a href="https://github.com/Levi-Taylor-Hotoke-26" className="nav-redirect" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <img width="37px" src="/images/github-logo.png" alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/levi-thomas-taylor" className="nav-redirect" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <img width="29px" src="/images/linkedin-logo.png" alt="LinkedIn logo" />
            </a>
            <a href="https://nz.seek.com/profiles/levi-taylor-7gGVVN6NKD" className="nav-redirect" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '5px' }}>
              <img width="29px" src="/images/seek-logo.png" alt="Seek logo" />
            </a>
          </div>
          <hr />
        </footer>
        <BackToTop />
      </div>
    </Router>
  );
}