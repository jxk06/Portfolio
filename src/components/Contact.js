import React from "react";
import chatIcon from "../assets/images/icon-chat.png";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src={chatIcon}
            alt="Contact icon"
            style={{ width: "42px", height: "42px", objectFit: "contain" }}
          />
          <h2>Contact</h2>
        </div>
        <p>Let’s connect or collaborate.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out if you want to discuss a project,
            collaboration, or opportunity.
          </p>

          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:jingxikoh@gmail.com">jingxikoh@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="#">linkedin.com/in/your-profile</a>
            </li>
            <li><strong>Location:</strong> Singapore</li>
          </ul>
        </div>

        {/* Keep grid balanced without a fake backend form */}
        <div className="contact-card">
          <h3>Availability</h3>
          <p>
            I’m open to internships, collaborations, and creative tech opportunities.
            If you’re interested, feel free to email me.
          </p>
        </div>
      </div>
    </section>
  );
}

