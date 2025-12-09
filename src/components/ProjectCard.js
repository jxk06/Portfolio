import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="project-card"
      onClick={() => navigate(`/portfolio/${project.id}`)}
    >
      <img src={project.image} className="project-thumb" alt={project.title} />

      <div className="project-info">
        <div className="project-tag">{project.tag}</div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
    </div>
  );
}

