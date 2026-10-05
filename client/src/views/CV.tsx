import DancingVillager from "../components/DancingVillager.tsx";

export default function CV() {
  return (
    <div className="cv-page-wrapper">
      <h2>Curriculum Vitae</h2>
      <div className="cv-download-btn">
        <a
          href="/levi-taylor-cv.pdf"
          download="Levi_Taylor_CV.pdf"
          className="btn-download">
          Download PDF
        </a>
      </div>
      <div className="cv-container">
        <div className="iframe-overlay">
          <iframe
            src="/levi-taylor-cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Levi Taylor CV"
            width="100%"
            height="2270px"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}