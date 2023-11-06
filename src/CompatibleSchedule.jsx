import React, { useState } from "react";
import AvailabilityCom from "./components/AvailabiltyCom";

const CompatibleSchedule = ({ availabilityData }) => {
  return (
    <div className="flex-col pt-10 m-2 md:m-16 lg:m-32 xl:m-56 2xl:mx-96 2xl:my-24">
      <div className="border-solid border-2 border-gray-500 rounded-lg">
        <h1 className="font-bold text-3xl text-orange-400 text-center mt-5">
          FRIEND'S
        </h1>
        <div className="m-10 p-2">
          <button className="bg-gray-200 p-2 rounded-md cursor-pointer">
            Just for fun
          </button>
          <button className="bg-gray-200 p-2 rounded-md cursor-pointer ml-3">
            More serious
          </button>
        </div>
        <AvailabilityCom availabilityData={availabilityData} />
      </div>
    </div>
  );
};

export default CompatibleSchedule;
