import React, { useState, useEffect, useMemo, useCallback } from 'react';

export const KnownResize = () => {
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);

  const onResize = useCallback(() => {
      console.log('Seze changed, current count =', count);

      setWidth(Math.floor(document.body.getBoundingClientRect().width));
    },[count]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const factorial = useMemo(() => {
    console.log('[factorial calculation]');

    let result = 1;

    for (let i = 1; i <= count; i++) {
      result *= i;
    }

    return result;
  }, [count]);

  console.log('[render]:', width);

  return (
    <div>
      <h4>Known Resize: {count}</h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>

      <h4>
        {count}! = {factorial}
      </h4>
    </div>
  );
};
