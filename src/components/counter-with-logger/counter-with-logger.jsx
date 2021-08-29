import React, { useState, useEffect } from 'react';

// constructor()
// render()
// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

export const CounterWithLogger = () => {
  const [count, setCount] = useState(0);
  const [animal, setAnimal] = useState('dog');

  useEffect(() => {
    console.log('effect with count =', count);

    document.title = `${count} clics`;
  }, [count]);

  // none - always
  // [] - after first render
  // [count] - if changed count

  console.log('render with count =', count);

  return (
    <div>
      <h4>Counter With Logger: {count}</h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>

      <div style={{ margin: 24 }}>
        <div>My favorite animal: {animal}</div>
        <select
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          value={animal}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
    </div>
  );
};
