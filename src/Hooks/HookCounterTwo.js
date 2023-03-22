import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((PrevState) => PrevState + 1);
    }
  };

  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <button onClick={() => setCount((PrevState) => PrevState + 1)}>
        increment
      </button>
      <button onClick={() => setCount((PrevState) => PrevState - 1)}>
        decrement
      </button>
      <button onClick={IncrementFive}>Increment5</button>
    </div>
  );
}

export default HookCounterTwo;
