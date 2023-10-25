// ClickableButton.js
import React, { useState } from "react";


function ClickableButton({text, onClick, week}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); 
    onClick(week);
  };

  const buttonClassName = isClicked ? "static-card" : "card";

  
  return (
      <button className={buttonClassName} onClick={handleClick}>
        {text}
    </button>
  );
}

export default ClickableButton;
