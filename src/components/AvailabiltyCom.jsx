import React, { useState } from "react";
import All from "./AvailabilityComps/All";
import NextWeek from "./AvailabilityComps/NextWeek";
import ThisWeek from "./AvailabilityComps/ThisWeek";

const AvailabiltyCom = ({ selectedWeek, handleWeekChange }) => {
  const [activeComponent, setActiveComponent] = useState("All");
  const changeComponent = (componentName) => {
    setActiveComponent(componentName);
  };
  let activeContent;
  if (activeComponent === "All") {
    activeContent = <All />;
  } else if (activeComponent === "ThisWeek") {
    activeContent = <ThisWeek />;
  } else if (activeComponent === "NextWeek") {
    activeContent = <NextWeek />;
  }
  return (
    <div>
      <div className="flex justify-between pl-10 pr-10 p-5 border-solid border-2 border-gray-500 rounded-lg m-10">
        <h2 className="">Availability</h2>
        <button onClick={() => changeComponent("All")}>All</button>
        <button onClick={() => changeComponent("ThisWeek")}>This Week</button>
        <button onClick={() => changeComponent("NextWeek")}>
          ThiNext Week
        </button>
        <form className="">
          <label className="mr-2">Select:</label>
          <select
            value={selectedWeek}
            onChange={handleWeekChange}
            className="border-solid border-gray-400 border-2 rounded-lg"
          >
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
        <div className="flex bg-blue-100 p-5 m-10 rounded-t-lg justify-between">
          <h3 className="ml-10">Friends</h3>
          <h3>Availability</h3>
          <h3 className="mr-10">Action Options</h3>
        </div>
        {activeContent}
      </div>
    </div>
  );
};

export default AvailabiltyCom;
