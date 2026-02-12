import React from "react";
import chatIcon from "../assets/icon-chat.png";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <div className="flex-header">
          <img
            src={chatIcon}
            alt="Contact icon"
            className="icon-md"
          />
          <h2>Contact</h2>
        </div>
        <p>Feel free to reach out if you want to discuss a project,
            collaboration, or opportunity.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          

          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:jingxikoh@gmail.com">jingxikoh@gmail.com</a>
            </li>

            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/koh-jing-xi-15b808311"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/koh-jing-xi-15b808311
              </a>
            </li>

            <li>
              <strong>Location:</strong> Singapore
            </li>
          </ul>
        </div>


      </div>
    </section>
  );
}


