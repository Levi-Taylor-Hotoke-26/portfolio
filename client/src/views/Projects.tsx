import { projectsData } from '../data/projectData.ts';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-main-title">Projects</h2>
      
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">
              {project.title} <span className="project-status">{project.status}</span>
            </h3>

            {project.imageUrl && (
  <img 
    src={project.imageUrl} 
    alt={`Screenshot of ${project.title}`} 
    className="project-img" 
  />
)}
            
            <p className="project-description">{project.description}</p>
            
            <p className="role-heading">My Role:</p>
            <ul className="role-list">
              {project.role.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>

            {project.motivation.length > 0 && project.motivation[0] !== "" && (
              <div className="project-section-block">
                <p className="project-subheading">Motivation:</p>
                {project.motivation.map((paragraph, index) => (
                  <p key={index} className="project-text-block">{paragraph}</p>
                ))}
              </div>
            )}

            {project.learned && project.learned.length > 0 && (
              <div className="project-section-block">
                <p className="project-subheading">What I Learned:</p>
                <p className="project-text-block">{project.learned}</p>
              </div>
            )}

            {project.improvements && project.improvements.length > 0 && (
              <div className="project-section-block">
                <p className="project-subheading">Future Improvements:</p>
                <p className="project-text-block">{project.improvements}</p>
              </div>
            )}

            {(project.githubUrl || project.liveUrl) && (
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn">
                    GitHub
                  </a>
                )}
                {project.githubUrl && project.liveUrl && <span className="link-separator">|</span>}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-btn">
                    Deployed Site
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}