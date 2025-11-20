// import React, { useState } from "react";

// const App = () => {
//   const [title, settitle] = useState("");

//   const btnClicked = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           btnClicked(e);
//         }}
//       >
//         <input
//           type="text"
//           value={title}
//           placeholder="Enter your name "
//           onChange={(e) => {
//             settitle(e.target.value);
//           }}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const btnClicked = (e) => {
    e.preventDefault();
    console.log("Submitted...");
  };

  const [user, setuser] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          btnClicked(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name here"
          value={user}
          onChange={(e) => {
            setuser(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
