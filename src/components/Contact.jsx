import React, { useState } from "react";
import CounterValue from "./CounterValue.jsx";

export default function Contact() {
  const [count, setCount] = useState(0);

  return (
    <section className="contact">
      <div className="contact__controls">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          העלה קאונט
        </button>
      </div>

      <div className="contact__value">
        <CounterValue value={count} />
      </div>
    </section>
  );
}
