import React from "react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="h-full  absolute w-full top-0 left-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white text-l font-bold h-12 w-12 rounded-full flex items-center justify-center">
          {props.id + 1}
        </h2>
        <div className="">
          <p className="text-lg leading-relaxed shadow-black text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatibus minima? Illo facere magni nemo.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-700 text-white rounded-full px-7 py-2 font-medium ">
              {props.tag}
            </button>
            <button className="bg-blue-700 text-white rounded-full px-3  font-medium">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
