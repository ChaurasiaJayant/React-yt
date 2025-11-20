import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen bg-black lg:flex text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 gap-4 lg:w-1/2 items-start  flex-col  "
      >
        <h1 className="text-3xl font-bold">Your Notes</h1>

        <input
          type="text"
          placeholder="Enter Task"
          className="border-2 rounded font-medium w-full px-5 py-2 outline-none h-20"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Write Details"
          className="border-2 w-full rounded font-medium px-5 outline-none py-2 h-32"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white w-full active:bg-gray-300 outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="bg-gray-900 lg:border-l-2 lg:w-1/2 p-10 ">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-center justify-center gap-5 h-[90%] overflow-auto mt-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start h-52 relative  text-black bg-cover px-4 pb-4 pt-9 w-40 bg-[url('https://th.bing.com/th/id/OIP.rQE-2z4GsRRsCjlZrqiffwHaKX?w=140&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3')] rounded "
              >
                <div>
                  <h3 className="text-xl leading-tight font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={(idx) => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-400 cursor-pointer active:scale-95 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
