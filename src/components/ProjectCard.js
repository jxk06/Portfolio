import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <article
      className="project-card"
      onClick={() => navigate(`/portfolio/${project.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/portfolio/${project.id}`)}
    >
      <div className="project-thumbWrap">
        <img src={project.image} className="project-thumb" alt={project.title} />
        <span className="project-sticker">{project.tag}</span>
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-cta">
          <span className="project-ctaText">View Project →</span>
        </div>
      </div>
    </article>
  );
}


