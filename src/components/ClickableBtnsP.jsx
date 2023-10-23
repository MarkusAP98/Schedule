// ClickableButton.js
import React, { useState } from "react";

function ClickableButtonsP({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonClassName = isClicked ? "card-P" : "static-card-P";

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ClickableButtonsP;
