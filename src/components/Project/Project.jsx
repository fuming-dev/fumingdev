import "./project.css";
import { projects } from "../../data";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <main id="Projects">
      <h1>Projects</h1>
      <div className="border-top"></div>
      <section className="project-container">
        {projects.map((project) => {
          return (
            <div className="section">
              <p>Title: {project.title}</p>
              <p>Language(s): {project.subtitle}</p>
              <img src={project.image} alt="Facebook Clone" />
              <div className="section-content">
                <a href={project.github}>
                  <FaGithub size={32} />
                </a>
                <p>Description: {project.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Project;
