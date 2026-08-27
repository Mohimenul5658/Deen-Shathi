import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="wrap">
        {/* Logo */}
        <Link to="/" className="brand">
          <img src={logo} alt="Deenshathi" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <NavLink to="/">হোম</NavLink>
            </li>

            <li>
              <NavLink to="/about">আমাদের সম্পর্কে</NavLink>
            </li>

            <li>
              <NavLink to="/how-it-works">যেভাবে কাজ করে</NavLink>
            </li>

            <li>
              <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <span className="lang-switch">বাংলা</span>

          <Link to="/login" className="btn btn-ghost">
            লগইন
          </Link>

          <Link to="/create-biodata" className="btn btn-gold">
            বায়োডাটা তৈরি করুন
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Sidebar */}
      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        {/* Close Button */}
        <button className="menu-close" onClick={closeMenu}>
          ×
        </button>

        <ul>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              হোম
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              আমাদের সম্পর্কে
            </NavLink>
          </li>

          <li>
            <NavLink to="/how-it-works" onClick={closeMenu}>
              যেভাবে কাজ করে
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              যোগাযোগ
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" onClick={closeMenu}>
              লগইন
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
