export default function Skills() {
  return (
    <section id="skills">
      <h2>Skill Stack</h2>

      <div className="skills-category">
        <span className="category-title">Core Languages & Frontend:</span>
        <br /><br />
        <div className="pill-group">
          <span className="skill-pill">TypeScript</span>
          <span className="skill-pill">JavaScript</span>
          <span className="skill-pill">HTML</span>
          <span className="skill-pill">CSS</span>
          <span className="skill-pill">React</span>
          <span className="skill-pill">Node.js</span>
        </div>
      </div>
      <br /><br />

      <div className="skills-category">
        <span className="category-title">Systems, Tools & Environment:</span>
        <br /><br />
        <div className="pill-group">
          <span className="skill-pill">Bash CLI</span>
          <span className="skill-pill">Git & GitHub</span>
          <span className="skill-pill">VS Code</span>
          <span className="skill-pill">SQLite / Turso</span>
        </div>
      </div>
      <br /><br />

      <div className="skills-category">
        <span className="category-title">IT & Operations:</span>
        <br /><br />
        <div className="pill-group">
          <span className="skill-pill">CRM Management</span>
          <span className="skill-pill">Data Auditing & Compliance</span>
          <span className="skill-pill">POS Systems</span>
          <span className="skill-pill">Technical Writing</span>
        </div>
      </div>
      <br />
    </section>
  );
}