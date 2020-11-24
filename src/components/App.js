import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div id="main">
      {text}
      <button
        id="click"
        onClick={() =>
          setText(
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          )
        }
      >
        click here
      </button>
    </div>
  );
}

export default App;
