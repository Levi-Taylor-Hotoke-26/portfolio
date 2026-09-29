import { projectsData } from '../data/projectData.ts';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <h3>
            {project.title}{' '}
            {project.status && <span style={{ color: 'red' }}>{project.status}</span>}
          </h3>
          <p>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            {project.liveUrl && (
              <>
                <b> | </b>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Deployed Site on Render</a>
              </>
            )}
          </p>
          <h4>{project.description}</h4>
          <h4>My Role:</h4>
          <ul>
            {project.role.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}