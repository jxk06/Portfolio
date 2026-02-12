import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hero-kicker">Digital Design & Development Student</p>
        <h1>
          Hi, I'm <span className="accent typewriter-effect">Jing Xi</span>.
        </h1>
        <p className="hero-subtitle">
          I create immersive digital experiences through UI/UX design, web and mobile development,
          and interactive technologies.
        </p>

        <div className="hero-actions">
          <button className="btn primary" onClick={() => navigate("/portfolio")}>
            View My Work
          </button>
          <button className="btn ghost" onClick={() => navigate("/about")}>
            About Me
          </button>
        </div>

        <div className="hero-meta">
          <span>Design · Development · XR · UI/UX</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-tag">Professional Development</div>
        <h2>Year 2 Portfolio</h2>
        <p>
          A showcase of creative and technical projects completed across my Digital
          Design & Development journey.
        </p>
        <ul className="hero-list">
          <li>✔ Design & Development Projects</li>
          <li>✔ UI/UX, React, Figma, VR</li>
          <li>✔ 2+ Certifications</li>
        </ul>
      </div>
    </section>
  );
}

