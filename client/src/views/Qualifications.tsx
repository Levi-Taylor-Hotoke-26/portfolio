export default function Qualifications() {
  return (
    <section id="qualifications">
      <h3 className="qualifications-main-title">Qualifications & Certificates</h3>
      
      {/* Mission Ready */}
      <div className="qualification-card">
        <h4 className="qual-title">New Zealand Diploma in Web Development and Design(L5)</h4>
        <p className="qual-issuer">Mission Ready HQ</p>
        <p className="qual-date">Expected to complete in 2027</p>
        
        <details className="qual-dropdown">
          <summary className="qual-summary-btn">View Certificate</summary>
          <div className="qual-image-container" style={{ marginTop: '1rem' }}>
            <img 
              src="/images/placeholder" 
              alt="Diploma in Web Development and Design official certificate - to be awarded in 2027" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} 
            />
          </div>
        </details>
        <div className="qual-logo-badge">
          <a href="https://www.missionreadyhq.com/accelerator/full-stack-developer-diploma"
            target="_blank">
        <img
          src="/images/mission-ready.svg"
          alt="Mission Ready HQ logo"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </a>
      </div>
      </div>

      {/* Dev Academy */}
      <div className="qualification-card">
        <h4 className="qual-title">New Zealand Diploma in Software Development(L6)</h4>
        <p className="qual-issuer">Dev Academy</p>
        <p className="qual-date">2026</p>
        
        <details className="qual-dropdown">
          <summary className="qual-summary-btn">View Certificate</summary>
          <div className="qual-image-container" style={{ marginTop: '1rem' }}>
            <img 
              src="/images/placeholder" 
              alt="Diploma in Software Development official certificate - to be awarded in October 2026" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', border: '1px solid #6B5CA5' }} 
            />
          </div>
        </details>
        <div className="qual-logo-badge">
          <a href="https://devacademy.co.nz/courses/fullstack-web-development/full-time"
            target="_blank">
        <img
          src="/images/dev-academy.svg"
          alt="Dev Academy logo"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </a>
      </div>
      </div>

      {/* Yoobee */}
      <div className="qualification-card">
        <h4 className="qual-title">New Zealand Certificate in Information Technology(L5)</h4>
        <p className="qual-issuer">Yoobee College</p>
        <p className="qual-date">2026</p>
        <p className="qual-grade">Grade: A (3.7 GPA)</p>
        
        <details className="qual-dropdown">
          <summary className="qual-summary-btn">View Certificate</summary>
          <div className="qual-image-container" style={{ marginTop: '1rem' }}>
            <img 
              src="/images/yoobee-cert.png" 
              alt="New Zealand Certificate in Information Technology official certificate" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', border: '1px solid #6B5CA5' }} 
            />
          </div>
        </details>
        <div className="qual-logo-badge">
          <a href="https://www.yoobee.ac.nz/courses/technology/certificate-in-information-technology"
            target="_blank">
        <img
          src="/images/yoobee.webp"
          alt="Yoobee College logo"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </a>
      </div>
      </div>

      {/* Mito */}
      <div className="qualification-card">
        <h4 className="qual-title">New Zealand Certificate in Business (First Line Management)(L4)</h4>
        <p className="qual-issuer">MITO</p>
        <p className="qual-date">2021</p>
        
        <details className="qual-dropdown">
          <summary className="qual-summary-btn">View Certificate</summary>
          <div className="qual-image-container" style={{ marginTop: '1rem' }}>
            <img 
              src="/images/mito-cert.png" 
              alt="New Zealand Certificate in Business (First Line Management) ROA" 
            />
          </div>
        </details>
        <div className="qual-logo-badge">
          <a href="https://www.mito.org.nz/programmes/business-skills/first-line-management"
            target="_blank">
        <img
          src="/images/mito.svg"
          alt="MITO logo"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </a>
      </div>
      </div>
    </section>
  );
}