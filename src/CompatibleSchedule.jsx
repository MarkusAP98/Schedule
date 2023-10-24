import React, { useState } from "react";
import AvailabilityCom from "./components/AvailabiltyCom";

const CompatibleSchedule = () => {

  return (
    <div className="flex-col p-20">
      <div className="border-solid border-2 border-gray-500 rounded-lg">
        <h1 className="font-bold text-3xl text-orange-400 text-center mt-5">
          MY BEST FRIENDS
        </h1>
        <div className="m-10 p-2">
          <button className="bg-gray-200 p-2 rounded-md cursor-pointer">
            Just for fun
          </button>
          <button className="bg-gray-200 p-2 rounded-md cursor-pointer ml-3">
            More serious
          </button>
        </div>
        <AvailabilityCom />
        
      </div>
    </div>
  );
};

export default CompatibleSchedule;
