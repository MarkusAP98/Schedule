import React, { useState } from "react";
import ClickableButton from "./components/ClickableBtns";

export default function App() {

  return (
    <div className="place-content-center p-40 m-60 shadow-xl">
      <h1 className="text-5xl font-extrabold">October 2023</h1>
      <h3 className="center mt-10">MY AVAILABILITY THIS MONTH</h3>
      <div>
        <ul className="flex justify-between pt-20 mb-10">
          <li className="">Monday</li>
          <li className="">Tuesday</li>
          <li className="">Wednesday</li>
          <li className="">Thursday</li>
          <li className="">Friday</li>
          <li className="">Saturday</li>
          <li className="">Sunday</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <ClickableButton text="1" />
        <ClickableButton text="1" />
        <ClickableButton text="1" />
        <ClickableButton text="1" />
        <ClickableButton text="1" />
        <ClickableButton text="1" />
        <ClickableButton text="1" />
      </div>
    </div>
  );
}
