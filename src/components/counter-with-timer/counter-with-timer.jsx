import React, { useState, useEffect } from 'react';

export const CounterWithTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 1;

    let timer = setInterval(() => {
      console.log(`[Effect interval ${i}]: ${count}`);
      i++;
    }, 2000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [count]);

  // render 1 -> effect 1
  // ...
  // render 2 -> cleanup 1 -> effect 2

  useEffect(() => {
    function onResize() {
      console.log('Size changed, current count =', count);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  console.log('render with count =', count);

  return (
    <div>
      <h4>Counter With Timer: {count}</h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>
    </div>
  );
};
