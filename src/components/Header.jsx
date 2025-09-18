import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `nav__link${isActive ? " is-active" : ""}`;

  return (
    <header className="header">
      <div className="brand">
        <div className="logo" aria-hidden />
        <span>האתר שלי</span>
      </div>
      <nav className="nav">
        <NavLink to="/" className={linkClass}>
          דף הבית
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          אודות
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          משחק
        </NavLink>
      </nav>
    </header>
  );
}
