import React, { useState } from "react";
import ClickableButtonsP from "./ClickableBtnsP";
 import { BiSolidUser } from "react-icons/bi";

const AvailabiltyCom = ({ selectedWeek, handleWeekChange }) => {
  return (
    <div>
      <div className="flex justify-between pl-10 pr-10 p-5 border-solid border-2 border-gray-500 rounded-lg m-10">
        <ClickableButtonsP text="Availability" />
        <button>All</button>
        <button>This Week</button>
        <button>Next Week</button>
        <form>
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
        <div className="flex bg-blue-100 p-5 m-5 rounded-t-lg justify-between">
          <h3 className="ml-10">Friends</h3>
          <h3>Availability</h3>
          <h3 className="mr-10">Action Options</h3>
        </div>
        <div>
          <div>
            <BiSolidUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabiltyCom;
