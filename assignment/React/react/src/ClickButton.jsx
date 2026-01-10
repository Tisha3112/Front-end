import { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  function handleClick() {
    setText("Clicked!");
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default ClickButton;
