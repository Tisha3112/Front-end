import { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>React Input Form</h2>

      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default InputForm;
