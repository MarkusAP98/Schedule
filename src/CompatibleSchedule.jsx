import React from "react";

const CompatibleSchedule = () => {
  return (
    <div className=" flex-col p-60 ">
      <h1 className="font-bold text-3xl text-orange-400">
        Compatible Schedule
      </h1>
      <div className="m-10 p-2">
        <button className="bg-gray-200 p-2 rounded-md cursor-pointer">
          Just for fun
        </button>
        <button className="bg-gray-200 p-2 rounded-md cursor-pointer ml-3">
          More serious
        </button>
      </div>
    </div>
  );
};

export default CompatibleSchedule;
