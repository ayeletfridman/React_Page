import React from "react";
import Contact from "../components/Contact.jsx";
import Content from "../components/Content";

export default function ContactPage() {
  const title = "משחק ספירה";
  const text = " - משחק ספירה לחצו על הכפתור כדי להעלות את הספירה";
  return (
    <main className="content container">
      <Content text={text} title={title} />

      <div className="section-block">
        <Contact />
      </div>
    </main>
  );
}
