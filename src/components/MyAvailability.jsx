import React from "react";
import ClickableButton from "./ClickableBtns";

// trying to send the week and day to the friends component when the button is clicked


const MyAvailability = ({ setAvailabilityData }) => {
  const handleButtonClicked = (week, day) => {
    console.log(`You clicked week ${week}, ${day}`);
    setAvailabilityData(prevData => {
      const newdata = [...prevData];
      newdata.push({ week, day });
      return newdata;
    })
  };

  return (
    <div className="place-content-center p-16 m-32 shadow-xl">
      <h1 className="text-3xl font-bold text-orange-400 pb-14 text-center">
        MY AVAILABILITY FOR 7 WEEKS
      </h1>
      {[1, 2, 3, 4, 5, 6, 7].map((week) => (
        <div className="flex justify-between" key={week}>
          <h2 className="text-center mt-7 font-bold">Week {week}</h2>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <ClickableButton
              key={day}
              text={day}
              week={week}
              day={day}
              onClick={() => handleButtonClicked(week, day)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyAvailability;
