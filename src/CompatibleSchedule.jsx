import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import AvailabilityCom from "./components/AvailabiltyCom";

const CompatibleSchedule = () => {

  return (
    <div className="flex-col p-60">
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
        <div>
          <div className="flex bg-blue-100 p-5 m-5 rounded-t-lg justify-between">
            <h3 className="ml-10">Friends</h3>
            <h3>Availability</h3>
            <h3 className="mr-10">Action Options</h3>
          </div>
          <div className="flex">
            <div className="flex">
              <CgProfile className="text-4xl"></CgProfile>
              <h1 className="font-semibold m-2">Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibleSchedule;
