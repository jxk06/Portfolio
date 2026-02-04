import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projects";
import "./ProjectPage.css";

import caseIcon from "../assets/projects.jpg";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [activeMedia, setActiveMedia] = useState(null);

  if (!project) {
    return <h1 style={{ padding: "3rem" }}>Project Not Found</h1>;
  }

  // Helper: detect YouTube ID (assumes IDs only, not full URLs)
  const isYouTube = (src) =>
    typeof src === "string" && src.length === 11 && !src.includes("/");

  return (
    <div className="project-page">
      <Link to="/portfolio" className="btn ghost">
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="project-header">
        <span className="project-tag-large">{project.tag}</span>

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

      {/* LIGHTBOX */}
      {activeMedia && (
        <div className="media-lightbox" onClick={() => setActiveMedia(null)}>
          <button
            className="lightbox-close"
            onClick={() => setActiveMedia(null)}
          >
            ✕
          </button>

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
