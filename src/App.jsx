import React, { useState } from "react";
import MyAvailability from "./components/MyAvailability";
import CompatibleSchedule from "./CompatibleSchedule";

export default function App() {
  const [isDisplayed, setIsDisplayed] = useState("myAvailibility"); // Default to MyAvailability

  const handleMyAvailabilityClick = () => {
    setIsDisplayed("myAvailibility");
  };

  const handleOthersAvailabilityClick = () => {
    setIsDisplayed("others");
  };

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

      {isDisplayed === "myAvailibility" && (
        <MyAvailability className="myAvailibility" />
      )}
      {isDisplayed === "others" && <CompatibleSchedule className="others" />}
    </div>
  );
}
