import React from "react";

export default function CounterValue({ value }) {
  return (
    <div className="card">
      <h3 className="card__title">הספירה הנוכחית</h3>
      <p className="card__text" style={{ fontSize: 18 }}>
        {value}
      </p>
    </div>
  );
}
