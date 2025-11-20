import { useState } from "react";
import { useEffect } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);
//   useEffect(
//     function () {
//       console.log("useEffect is running");
//     },
//     [num]
//   );

//   return (
//     <div>
//       <h1>Num 1 = {num}</h1>
//       <h1>Num 2 ={num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10);
//         }}
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  const changeA = () => {
    console.log("Value of A is changed .....");
  };
  const changeB = () => {
    console.log("Value of B is changed");
  };

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  useEffect(
    function () {
      changeA();
    },
    [a]
  );

  return (
    <div>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        A is {a}
      </button>
      <button
        onClick={() => {
          setb(b - 1);
        }}
      >
        B is {b}
      </button>
    </div>
  );
};

export default App;
