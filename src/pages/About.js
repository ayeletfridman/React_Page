import React from "react";
import Content from "../components/Content";

export default function About() {
  const title = "אודות";
  const text =
    "האתר נבנה כדי להציג דוגמה פשוטה וברורה לפיתוח אפליקציות ב־React. כאן תוכלו ללמוד איך להשתמש בקומפוננטות, לנהל ניווט בין דפים בעזרת React Router, ולעצב את הממשק בצורה מודרנית ונקייה. המטרה היא לאפשר למפתחים מתחילים להבין את היסודות בקלות ובמהירות, תוך שימוש בקוד מסודר וקריא.";
  return (
    <main className="content container">
      <Content text={text} title={title} />
    </main>
  );
}
