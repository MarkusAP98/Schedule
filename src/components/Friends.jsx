import React from 'react'
import { BiSolidUser } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const Friends = () => {
  return (
    <div>
      <div className="p-5 pl-7 flex">
        <GoDotFill className="text-green-500 relative left-2 " />
        <BiSolidUser className="text-3xl" />
        <h1 className="mt-1 ml-2">Markus</h1>
      </div>
    </div>
  );
}

export default Friends