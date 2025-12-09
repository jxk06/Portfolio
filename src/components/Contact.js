import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let’s connect or collaborate.</p>
      </div>

      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out if you want to discuss a project,
            collaboration, or opportunity.
          </p>

          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:jingxikoh@gmail.com">jingxikoh@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/your-profile</a></li>
            <li><strong>Location:</strong> Singapore</li>
          </ul>
        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Send a Message</h3>
          <p className="contact-note">(This is a demo form — backend not connected)</p>

          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea rows="4" placeholder="Say hi 👋"></textarea>
          </label>

          <button className="btn primary" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
