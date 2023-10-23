import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ClickableButtonsP from "./components/ClickableBtnsP";

const CompatibleSchedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Initialize the selected week to 1

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

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
        <div className="flex justify-between pl-10 pr-10 p-5 border-solid border-2 border-gray-500 rounded-lg m-10">
          <ClickableButtonsP text='Availibity'/>
          <button>All</button>
          <button>This Week</button>
          <button>Next Week</button>
          <form>
            <label className="mr-2">Select:</label>
            <select value={selectedWeek} onChange={handleWeekChange} className="border-solid border-gray-400 border-2 rounded-lg">
              <option value={1}>Week 1</option>
              <option value={2}>Week 2</option>
              <option value={3}>Week 3</option>
              <option value={4}>Week 4</option>
              <option value={5}>Week 5</option>
              <option value={6}>Week 6</option>
              <option value={7}>Week 7</option>
            </select>
          </form>
        </div>
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
