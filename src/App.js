import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
  setCounter(counter + 1); // correct way to update state
};

     return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

 


export default App;
