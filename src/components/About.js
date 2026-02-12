import React, { useState } from "react";
import certifications from "../data/certifications";
import aboutIcon from "../assets/aboutme.jpg";

export default function About() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="section about">
      <div className="section-header">
        <div className="flex-header">
          <img
            src={aboutIcon}
            alt="About icon"
            className="icon-md"
          />
          <h2>About Me</h2>
        </div>
        <p>Designer · Developer · Creative Technologist</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I’m a Digital Design & Development student passionate about creating
            meaningful, visually compelling, creative and immersive digital experiences. I enjoy exploring innovative approaches and crafting distinctive digital experiences that speaks to me. I approach design as storytelling — where visuals, interaction, and emotion come together to create something meaningful.
          </p>
        </div>

        <div className="about-card">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.id} onClick={() => setActiveCert(cert)}>
                <div className="cert-badge">
                  <img
                    src={cert.icon}
                    alt=""
                    className="icon-sm"
                  />
                </div>
                <div className="cert-content">
                  <strong>{cert.title}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CERTIFICATE LIGHTBOX */}
      {activeCert && (
        <div className="media-lightbox" onClick={() => setActiveCert(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh", background: "transparent", border: "none", boxShadow: "none" }}
          >
            <img
              src={activeCert.icon}
              alt={activeCert.title}
              style={{ objectFit: "contain", maxHeight: "85vh", maxWidth: "90vw" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

