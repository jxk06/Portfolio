import React from "react";
import certifications from "../data/certifications";
import aboutIcon from "../assets/aboutme.jpg";

export default function About() {
  return (
    <section className="section about">
      <div className="section-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src={aboutIcon}
            alt="About icon"
            style={{ width: 42, height: 42 }}
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
            meaningful, aesthetical, creative and immersive digital experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.id} style={{ display: "flex", gap: "0.75rem" }}>
                <img
                  src={cert.icon}
                  alt=""
                  style={{ width: 28, height: 28 }}
                />
                <strong>{cert.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

