export default function CV() {
  return (
    <div className="cv-page-wrapper">
      <h2>Curriculum Vitae</h2>
      <div className="cv-container iframe-cursor-wrapper">
        <iframe
          src="/levi-taylor-cv.pdf"
          title="Levi Taylor CV"
          width="100%"
          height="2325px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}