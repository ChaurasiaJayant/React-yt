import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  let increase = () => {
    setnum(num + 10);
  };
  let decrease = () => {
    setnum(num - 10);
  };
  let jump5 = () => {
    setnum(num + 5);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  );
};

export default App;
