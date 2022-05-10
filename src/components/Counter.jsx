import React, { useState } from "react";
import "../styles.css";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div className="container">
      <span>Count: {count}</span>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}
