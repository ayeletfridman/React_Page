import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>תפריט</h2>
      <ul>
        <li>
          <a href="#">לוח בקרה</a>
        </li>
        <li>
          <a href="#">פרויקטים</a>
        </li>
        <li>
          <a href="#">הגדרות</a>
        </li>
      </ul>
    </aside>
  );
}
