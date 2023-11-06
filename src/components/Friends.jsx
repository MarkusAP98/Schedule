import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import {
  AiFillEye,
  AiOutlineMail,
  AiTwotoneMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

const Friends = ({ availabilityData }) => {
  if (!availabilityData) {
    // If availabilityData is undefined, you can return a message or placeholder here.
    return (
      <>
        <div className="py-2 flex justify-between">
          <div className="flex">
            <GoDotFill className="text-green-500 relative left-2 " />
            <BiSolidUser className="text-2xl" />
            <h1 className="mt-1 ml-2"></h1>
          </div>
          <div>Week 0, Day 0</div>
          <div className="flex mr-10 justify-between w-32 text-1xl">
            <AiFillEye />
            <BiPaperPlane />
            <AiOutlineMail />
            <AiTwotoneMessage />
            <AiOutlineUser />
          </div>
        </div>
      </>
    );
  } else {
    // If availabilityData is defined, you can return the actual data here.
    return (
      <>
        {availabilityData.map((entry, index) => (
          <div className="py-2 flex justify-between" key={index}>
            <div className="flex">
              <GoDotFill className="text-green-500 relative left-2 " />
              <BiSolidUser className="text-2xl" />
              <h1 className="mt-1 ml-2">{entry.name}</h1>
            </div>
            <div>
              Week {entry.week}, Day {entry.day}
            </div>
            <div className="flex mr-10 justify-between w-32 text-1xl">
              <AiFillEye />
              <BiPaperPlane />
              <AiOutlineMail />
              <AiTwotoneMessage />
              <AiOutlineUser />
            </div>
          </div>
        ))}
      </>
    );
  }

};

export default Friends;
