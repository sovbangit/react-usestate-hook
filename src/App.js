import React, { useState } from "react";
import "./styles.css";
import Mycomp from "./comp";

export default function App() {
  var [count, setState] = useState(5);

  const onclickhandle = (newcount) => {
    console.log(`click ${newcount}`);
    setState(newcount);
  };

  return (
    <div className="App">
      <h1>Happy reacting</h1>
      <div>
        <Mycomp firstname="Sourav" lastname="Banerjee" />
        <button onClick={() => onclickhandle(count + 1)}> Increment </button>
        <button onClick={() => onclickhandle(count - 1)}> Decrement </button>
        <p className="label"> {count} </p>
      </div>
    </div>
  );
}
