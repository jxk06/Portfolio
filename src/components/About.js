import React from "react";
import certifications from "../data/certifications";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Designer · Developer · Creative Technologist</p>
      </div>

      <div className="about-grid">
        {/* LEFT SIDE */}
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I’m a Digital Design & Development student passionate about creating meaningful,
            innovative digital experiences. I enjoy combining visual design with technical
            implementation to bring ideas to life.
          </p>

          <p>
            My interest includes UI/UX design, front-end development, creative coding,
            and immersive XR interactions.
          </p>

          <h4>Skills</h4>
          <div className="chip-row">
            <span className="chip">React</span>
            <span className="chip">React Native</span>
            <span className="chip">UI/UX Design</span>
            <span className="chip">Figma</span>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML / CSS</span>
            <span className="chip">Unity VR</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-card">
          <h3>Certifications</h3>
          <p>Some qualifications I earned during my growth as a designer-developer.</p>

          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <div className="cert-badge">
                  {cert.id.toString().padStart(2, "0")}
                </div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
