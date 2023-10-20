// ClickableButton.js
import React, { useState } from "react";

function ClickableButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonClassName = isClicked ? "static-card" : "card";

  return (
    <button className={buttonClassName} onClick={handleClick}>
      10
    </button>
  );
}

export default ClickableButton;
