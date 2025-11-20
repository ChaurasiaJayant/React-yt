import React from "react";

const App = () => {
  //   const btnClicked = () => {
  //     console.log("Button clicked");
  //   };
  //   const mouseEnter = () => {
  //     console.log("Mouse hovered");
  //   };

  return (
    <div>
      {/* <h2>Hello Jayant</h2>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>
        Click me
      </button> */}

      <div>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={function () {
            console.log("Input Added");
          }}
        />
      </div>
    </div>
  );
};

export default App;
