import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="section-header">
        <h2>My Projects</h2>
        <p>A showcase of my development & design work</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
