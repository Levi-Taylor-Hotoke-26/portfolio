export default function Skills() {
  return (
    <>
      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-category">
          <span className="category-title">Core Languages & Frontend:</span>
          <br /><br />
          <div className="pill-group">
            <span className="skill-pill">TypeScript</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">Python</span>
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">Sass CSS</span>
            <span className="skill-pill">Tailwind CSS</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">UI/UX & Responsive Layouts</span>
          </div>
        </div>
        <br /><br />

        <div className="skills-category">
          <span className="category-title">Backend, APIs & Databases:</span>
          <br /><br />
          <div className="pill-group">
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Express.js</span>
            <span className="skill-pill">RESTful API Routing</span>
            <span className="skill-pill">Third-Party API Integration</span>
            <span className="skill-pill">SQLite & Knex</span>
            <span className="skill-pill">Cloud-based Turso</span>
            <span className="skill-pill">Relational Database Configuration</span>
          </div>
        </div>
        <br /><br />

        <div className="skills-category">
          <span className="category-title">Authentication, Testing & DevOps:</span>
          <br /><br />
          <div className="pill-group">
            <span className="skill-pill">Auth0</span>
            <span className="skill-pill">JWT Validation</span>
            <span className="skill-pill">Route Protection</span>
            <span className="skill-pill">Vitest & Testing</span>
            <span className="skill-pill">Git & GitHub</span>
            <span className="skill-pill">Git Keeper Workflow</span>
            <span className="skill-pill">Render Deployment</span>
            <span className="skill-pill">Bash CLI</span>
            <span className="skill-pill">VS Code</span>
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
    </>
  );
}