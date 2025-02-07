import React from "react";

export default function Exponent({ count, exponent }) {
  const result = Math.pow(count, exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}</p>
      <p className="exponent-result">
        {count} ^ {exponent} = <span className="total">{result}</span>
      </p>
    </div>
  );
}