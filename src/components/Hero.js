import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hero-kicker">Digital Design & Development Student</p>
        <h1>
          Hi, I'm <span className="accent">Jing Xi</span>.
        </h1>
        <p className="hero-subtitle">
          I create immersive digital experiences through UI/UX design, web development,
          and interactive technologies.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn primary">
            View My Work
          </a>
          <a href="#about" className="btn ghost">
            About Me
          </a>
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
