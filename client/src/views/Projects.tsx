import { projectsData } from '../data/projectData.ts';

export default function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <h4>
            {project.title}{' '}
            {project.status && <span style={{ color: 'red' }}>{project.status}</span>}
          </h4>
          <p>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            {project.liveUrl && (
              <>
                <b> | </b>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Deployed Site on Render</a>
              </>
            )}
          </p>
          <h5>{project.description}</h5>
          <h5>My Role:</h5>
          <ul>
            {project.role.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </section>
  );
}