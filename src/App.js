import React from 'react';
import './app.css';

// import { SimpleCounter } from './components/simple-counter/simple-counter';
// import { CounterWithLogger } from './components/counter-with-logger/counter-with-logger';
// import { CounterWithTimer } from './components/counter-with-timer/counter-with-timer';
import { KnownResize } from './components/known-resize/known-resize';

function App() {
  return (
    <div className="app">
      {/* useState */}
      {/* <SimpleCounter /> */}

      {/* useEffect */}
      {/* <CounterWithLogger /> */}
      {/* <CounterWithTimer /> */}

      {/* useCallback */}
      <KnownResize />
    </div>
  );
}

export default App;
