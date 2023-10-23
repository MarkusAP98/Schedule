// ClickableButton.js
import React, { useState } from "react";


function ClickableButton({text}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonClassName = isClicked ? "static-card" : "card";

  
  return (
      <button className={buttonClassName} onClick={handleClick}>
        {text}
    </button>
  );
}

export default ClickableButton;
