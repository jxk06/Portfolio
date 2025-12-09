import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="project-page">

      <Link to="/portfolio" className="btn ghost" style={{ marginBottom: "2rem" }}>
        ← Back to Portfolio
      </Link>

      <div className="project-header-card">
        <span className="project-tag-large">{project.tag}</span>
        <h1>{project.title}</h1>
        <p className="project-subtitle-large">{project.subtitle}</p>
      </div>

      <div className="media-grid">
        {project.media.map((src, index) =>
          src.endsWith(".mp4") ? (
            <video key={index} controls className="media-item">
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img key={index} src={src} alt="" className="media-item" />
          )
        )}
      </div>

      <div className="project-details-card">
        <h2>Conceptualisation</h2>
        <p>{project.process.conceptualisation}</p>

        <h2>Planning</h2>
        <p>{project.process.planning}</p>

        <h2>Development</h2>
        <p>{project.process.development}</p>
      </div>
    </div>
  );
}

