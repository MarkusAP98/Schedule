import React, { useState } from "react";

function ColoredClickableBtn({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonClassName = isClicked ? "static-card" : "blue-card";

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ColoredClickableBtn;
