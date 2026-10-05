import { useState } from "react";
import BackToTop from "./BackToTop.tsx";

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <footer>
      <hr />
      <div className="footer-content-wrapper">

        <div className="footer-left-group">
          <div
            className="copyright-wrapper"
            onClick={() => setShowCredits(!showCredits)}
            title="Click to view asset credits"
          >
            <span className="copyright-icon">©</span>
          </div>

          {showCredits && (
            <div className="credits-tooltip">
              <div className="credits-header">
                <strong>Asset Credits</strong>
                <button onClick={(e) => { e.stopPropagation(); setShowCredits(false); }}>✕</button>
              </div>
              <ul>
                <li><strong>Running Pikachu GIF:</strong> snivee@tenor.com</li>
                <li><strong>Animal Crossing Dancing Villager GIFs:</strong> shinobi-bacon@tumblr.com</li>
                <li><strong>Audio / BGM:</strong> Animal Crossing OST (Nintendo / Aircheck)</li>
                <li><strong>Custom Cursors:</strong> Runescape / Jagex</li>
              </ul>
            </div>
          )}
        </div>

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

        <div className="footer-right-group">
          <BackToTop />
        </div>
      </div>
      <hr />
    </footer>
  );
}