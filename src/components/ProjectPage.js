import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectPage.css"; // ✅ MUST be this path since CSS is in the same folder

import caseIcon from "../assets/images/projects.jpg"; // ✅ add your icon here

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h1 style={{ padding: "3rem" }}>Project Not Found</h1>;
  }

  return (
    <div className="project-page">
      <Link to="/portfolio" className="btn ghost">
        ← Back to Projects
      </Link>

      <header className="project-header">
        <span className="project-tag-large">{project.tag}</span>

        {/* ✅ Icon beside the project title */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src={caseIcon}
            alt="Project icon"
            style={{ width: "42px", height: "42px", objectFit: "contain" }}
          />
          <h1 className="project-title-large">{project.title}</h1>
        </div>

        <p className="project-subtitle-large">{project.subtitle}</p>

        {project.meta?.length > 0 && (
          <ul className="project-meta">
            {project.meta.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}
      </header>

      <section className="project-media">
        <h2 className="project-sectionTitle">Media</h2>

        <div className="media-grid">
          {project.media?.map((src, index) =>
            src.toLowerCase().endsWith(".mp4") ? (
              <div className="media-item" key={index}>
                <video controls className="media-video">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="media-item" key={index}>
                <img src={src} alt="" className="media-img" />
              </div>
            )
          )}
        </div>
      </section>

      <section className="project-details-card">
        <h2 className="project-sectionTitle">Process</h2>

        <div className="process-grid">
          <div className="process-block">
            <h3>Conceptualisation</h3>
            <p>{project.process?.conceptualisation}</p>
          </div>

          <div className="process-block">
            <h3>Planning</h3>
            <p>{project.process?.planning}</p>
          </div>

          <div className="process-block">
            <h3>Development</h3>
            <p>{project.process?.development}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

