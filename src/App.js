import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import "./App.css";

import bgHome from "./assets/images/bg-home-city.png";
import bgAbout from "./assets/images/bg-about-stars2.jpg";
import bgContact from "./assets/images/bg-contact-hands.png";

function Layout() {
  const location = useLocation();

  const pageClass = (() => {
    if (location.pathname === "/") return "page-home";
    if (location.pathname === "/about") return "page-about";
    if (location.pathname === "/contact") return "page-contact";
    if (location.pathname.startsWith("/portfolio")) return "page-portfolio";
    return "";
  })();

  return (
    <div
      className={`app-root ${pageClass}`}
      style={{
        "--bg-home": `url(${bgHome})`,
        "--bg-about": `url(${bgAbout})`,
        "--bg-contact": `url(${bgContact})`,
      }}
    >
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Jing Xi · Digital Design & Development
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}



