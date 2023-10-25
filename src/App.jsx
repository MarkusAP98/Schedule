import React, { useState } from "react";
import MyAvailability from "./components/MyAvailability";
import CompatibleSchedule from "./CompatibleSchedule";
import Paul from "./components/OthersAvailability.jsx/Paul.jsx"
;

export default function App() {
  const [isDisplayed, setIsDisplayed] = useState("myAvailibility"); // Default to MyAvailability

  const handleMyAvailabilityClick = () => {
    setIsDisplayed("myAvailibility");
  };

  const handleOthersAvailabilityClick = () => {
    setIsDisplayed("others");
  };
  const handlePaulAvailabilityClick = () => {
    setIsDisplayed("Paul");
  }

  return (
    <div>
      <button
        className={`ml-5 cursor-pointer hover:underline ${
          isDisplayed === "myAvailibility" ? "active" : ""
        }`}
        onClick={handleMyAvailabilityClick}
      >
        My Availability
      </button>
      <button
        className={`ml-5 cursor-pointer hover:underline ${
          isDisplayed === "others" ? "active" : ""
        }`}
        onClick={handleOthersAvailabilityClick}
      >
        Compatible Availability
      </button>
      <button
        className={`ml-5 cursor-pointer hover:underline ${
          isDisplayed === "others" ? "active" : ""
        }`}
        onClick={handlePaulAvailabilityClick}
      >
        Paul's Availability
      </button>

      {isDisplayed === "myAvailibility" && (
        <MyAvailability className="myAvailibility" />
      )}
      {isDisplayed === "others" && <CompatibleSchedule className="others" />}
      {isDisplayed === "Paul" && <Paul className="Paul" />}
    </div>
  );
}
