import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=14`
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-600 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading.........
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text h-screen p-4 overflow-auto text-white">
      <div className="flex flex-wrap p-2 h-[82%] gap-5">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-5">
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black rounded cursor:pointer active:scale-95 px-4 py-2 font-semibold text-sm"
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black rounded cursor:pointer active:scale-95 px-4 py-2 font-semibold text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
