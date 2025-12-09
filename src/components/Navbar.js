import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="logo">
        <span className="logo-mark">&lt;/&gt;</span>
        <span className="logo-text">JX Portfolio</span>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

