import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './CSS/Projects.css';
import allProjects from '../assets/Routes/AllProject';
console.log(allProjects);
function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Thoriq AS - Project</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            {allProjects.map((project) => (
              <div className="col project-col" key={project.id}>
                <div className="project-card">
                  <div className="imgsec">
                    <img src={project.img} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {/* <a className="btn-website" href={project.websiteUrl} target="_blank" rel="noreferrer">
                      <AiOutlineLink className="project-icon" />
                      &nbsp;&nbsp;Website
                    </a> */}
                    {project.websiteUrl !== '' ? (
                      project.maintenence === true ? (
                        <a
                          className="btn-maintenence btn"
                          href={project.websiteUrl}
                          rel="noreferrer"
                        >
                          <AiOutlineLink className="project-icon" />
                          &nbsp;&nbsp;Maintenance
                        </a>
                      ) : (
                        <a
                          className="btn-website btn"
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineLink className="project-icon" />
                          &nbsp;&nbsp;Website
                        </a>
                      )
                    ) : (
                      ''
                    )}
                    <a
                      className="btn-github"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub className="project-icon" />
                      &nbsp;&nbsp;GitHub
                    </a>
                    <div className="d-block tech-stack-wrapper">
                      {project.techStack.map((tech) => (
                        <span key={tech} id="tech-stack">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
