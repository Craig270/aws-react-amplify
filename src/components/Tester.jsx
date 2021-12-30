import React from "react";

export default function Tester() {
  const [numb, setNumb] = react.useState(0);

  function goUp() {
    setNumb((oldNumb) => oldNumb + 1);
  }

  function goDown() {
    setNumb((oldNumb) => oldNumb - 1);
  }

  return (
    <div className="App">
      <h1> Say what's up?! WHATS UP!</h1>
      <h2>{numb}</h2>
      <button onClick={goUp}>Make go up</button>
      <br></br>
      <button onClick={goDown}>Make go down</button>
    </div>
  );
}
