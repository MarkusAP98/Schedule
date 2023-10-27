import React, { useState } from "react";
import MyAvailability from "./components/MyAvailability";
import CompatibleSchedule from "./CompatibleSchedule";
import Paul from "./components/OthersAvailability.jsx/Paul.jsx"
;
import Friends from './components/Friends'

export default function App() {
  const [availabilityData, setAvailabilityData] = useState([]); 
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
  const handleButtonClicked = (week, day) => {
    console.log(`You clicked week ${week}, ${day}`);
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
      <button
        className={`ml-5 cursor-pointer hover:underline ${
          isDisplayed === "Paul" ? "active" : ""
        }`}
        onClick={handlePaulAvailabilityClick}
      >
        Paul's Availability
      </button>

      {isDisplayed === "myAvailibility" && (
        <MyAvailability
          className="myAvailibility"
          onButtonClicked={handleButtonClicked}
          setAvailabilityData={setAvailabilityData}
        />
      )}
      {isDisplayed === "others" && <CompatibleSchedule className="others" />}
      {isDisplayed === "Paul" && <Paul className="Paul" />}
      <Friends availabilityData={availabilityData} />
    </div>
  );
}
