import React, { useState } from "react";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import "./app.scss";

function App() {
  const [counter, setCounter] = React.useState(0);

  function addIt() {
    setCounter((prevCount) => prevCount + 1);
  }
  function minusIt() {
    setCounter((prevCount) => prevCount - 1);
  }
  return (
    <div className="App">
      <Header />
      <Intro />
      <div>
        <button onClick={addIt}>+</button>
        <h3>{counter}</h3>
        <button onClick={minusIt}>-</button>
      </div>
    </div>
  );
}

export default App;
