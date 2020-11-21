import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div id="main">
      <button
        id="click"
        onClick={() =>
          setText(
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          )
        }
      >
        click here
      </button>
      <p id="para">{text}</p>
    </div>
  );
}

export default App;
