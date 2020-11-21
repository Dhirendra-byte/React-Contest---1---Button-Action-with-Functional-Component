import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div id="main">
      <p id="para">{text}</p>
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
    </div>
  );
}

export default App;
