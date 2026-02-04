import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="section portfolio">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Design & Development work (click to view details)</p>
      </div>

      <div className="filter-row">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "design" ? "active" : ""}`}
          onClick={() => setFilter("design")}
        >
          Design
        </button>
        <button
          className={`filter-btn ${filter === "development" ? "active" : ""}`}
          onClick={() => setFilter("development")}
        >
          Development
        </button>
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
