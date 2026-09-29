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
            
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {project.githubUrl && project.liveUrl && <span> | </span>}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Deployed Site</a>
              )}
            </div>

            <p className="project-description">{project.description}</p>
            
            <p className="role-heading">My Role:</p>
            <ul className="role-list">
              {project.role.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}