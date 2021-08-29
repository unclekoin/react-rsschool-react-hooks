import React, { useState } from 'react';

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Simple Counter: {count}</h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>
    </div>
  );
};
