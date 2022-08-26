import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <h1>Count: {count}</h1>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
          <button
            onClick={() => setCount((prev) => (prev === 0 ? prev : prev - 1))}
          >
            DEC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
