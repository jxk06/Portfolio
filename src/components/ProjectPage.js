import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projects";
import "./ProjectPage.css";

import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [activeMedia, setActiveMedia] = useState(null);

  if (!project) {
    return <h1 className="project-not-found">Project Not Found</h1>;
  }

  // Helper: detect YouTube ID (assumes IDs only, not full URLs)
  const isYouTube = (src) =>
    typeof src === "string" && src.length === 11 && !src.includes("/");

  return (
    <div className="project-page active-page">
      <Link to="/portfolio" className="btn ghost">
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="project-header">
        <span className="project-tag-large">{project.tag}</span>

        <div className="flex-header">
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

      {/* MEDIA SECTION */}
      <section className="project-media">
        <h2 className="project-sectionTitle">Media</h2>

        <div className="media-grid">
          {project.media?.map((src, index) =>
            isYouTube(src) ? (
              <div
                key={index}
                className="media-item clickable"
                onClick={() => setActiveMedia({ type: "youtube", src })}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${src}`}
                  title="Project video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                key={index}
                className="media-item clickable"
                onClick={() => setActiveMedia({ type: "image", src })}
              >
                <img src={src} alt="" className="media-img" />
              </div>
            )
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="project-details-card">
        <h2 className="project-sectionTitle">Process</h2>

        <div className="process-grid">
          <div className="process-block">
            <h3>Conceptualisation</h3>
            {Array.isArray(project.process?.conceptualisation) ? (
              <ul className="process-list">
                {project.process.conceptualisation.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{project.process?.conceptualisation}</p>
            )}
          </div>

          <div className="process-block">
            <h3>Planning</h3>
            {Array.isArray(project.process?.planning) ? (
              <ul className="process-list">
                {project.process.planning.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{project.process?.planning}</p>
            )}
          </div>

          <div className="process-block">
            <h3>Development</h3>
            {Array.isArray(project.process?.development) ? (
              <ul className="process-list">
                {project.process.development.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{project.process?.development}</p>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeMedia && (
        <div className="media-lightbox" onClick={() => setActiveMedia(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "youtube" ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeMedia.src}?autoplay=1`}
                title="Expanded project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={activeMedia.src} alt="" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
