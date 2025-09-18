import React from "react";

export default function Content({ text, title }) {
  return (
    <main className="content">
      <h2>{title}</h2>
      <p>{text}</p>
    </main>
  );
}
