import React, { useState } from "react";
import All from "./AvailabilityComps/All";
import NextWeek from "./AvailabilityComps/NextWeek";
import ThisWeek from "./AvailabilityComps/ThisWeek";
import Friends from "./Friends";

const AvailabiltyCom = ({
  selectedWeek,
  handleWeekChange,
  availabilityData,
}) => {
  const [activeComponent, setActiveComponent] = useState("All");

  const changeComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="flex justify-between border-solid border-2 border-gray-500 rounded-lg ">
        <h2 className="mt-3">Availability</h2>
        <button
          onClick={() => changeComponent("All")}
          className={
            activeComponent === "All" ? "active-button" : "inactive-button"
          }
        >
          All
        </button>
        <button
          onClick={() => changeComponent("ThisWeek")}
          className={
            activeComponent === "ThisWeek" ? "active-button" : "inactive-button"
          }
        >
          This Week
        </button>
        <button
          onClick={() => changeComponent("NextWeek")}
          className={
            activeComponent === "NextWeek" ? "active-button" : "inactive-button"
          }
        >
          Next Week
        </button>
        <form className="mt-3">
          <label className="mr-2">Select:</label>
          <select
            value={selectedWeek}
            onChange={handleWeekChange}
            className="border-solid border-gray-400 border-2 rounded-lg"
          >
            <option value="ThisWeek">Week 1</option>
            <option value="NextWeek">Week 2</option>
            <option value={3}>Week 3</option>
            <option value={4}>Week 4</option>
            <option value={5}>Week 5</option>
            <option value={6}>Week 6</option>
            <option value={7}>Week 7</option>
          </select>
        </form>
      </div>
      <div>
        <div className="flex bg-blue-100 rounded-t-lg justify-between">
          <h3 className="ml-10">Friends</h3>
          <h3>Availability</h3>
          <h3 className="mr-10">Action Options</h3>
        </div>
        {/* Render the active component */}
        {activeComponent === "All" && <All />}
        {activeComponent === "ThisWeek" && <ThisWeek />}
        {activeComponent === "NextWeek" && <NextWeek />}
      </div>
      <Friends availabilityData={availabilityData} />
    </div>
  );
};

export default AvailabiltyCom;
