import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1>חדשות רנדומליות</h1>
      <nav className="nav">
        <a className="nav__link" href="#">
          דף הבית
        </a>
        <a className="nav__link" href="#">
          אודות
        </a>
        <a className="nav__link" href="#">
          צור קשר
        </a>
      </nav>
    </header>
  );
}
