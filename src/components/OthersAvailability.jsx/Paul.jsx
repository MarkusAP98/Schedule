import React from "react";
import ClickableButton from "../ClickableBtns";

const Paul = () => {
  const handleButtonClicked = (week, day) => {
    console.log(`You clicked week ${week}, ${day}`);
  };
  return (
    <div className="place-content-center p-16 m-32 shadow-xl">
      <h1 className="text-3xl font-bold text-orange-400 pb-14 text-center">
        Paul's AVAILABILITY FOR 7 WEEKS
      </h1>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 1</h2>
        <ClickableButton text="Mon" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={1} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={1} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 2</h2>
        <ClickableButton text="Mon" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={2} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={2} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 3</h2>
        <ClickableButton text="Mon" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={3} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={3} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 4</h2>
        <ClickableButton text="Mon" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={4} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={4} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 5</h2>
        <ClickableButton text="Mon" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={5} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={5} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 6</h2>
        <ClickableButton text="Mon" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={6} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={6} onClick={handleButtonClicked} />
      </div>
      <div className="flex justify-between">
        <h2 className="text-center mt-7 font-bold">Week 7</h2>
        <ClickableButton text="Mon" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Tue" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Wed" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Thu" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Fri" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Sat" week={7} onClick={handleButtonClicked} />
        <ClickableButton text="Sun" week={7} onClick={handleButtonClicked} />
      </div>
    </div>
  );
};

export default Paul;
