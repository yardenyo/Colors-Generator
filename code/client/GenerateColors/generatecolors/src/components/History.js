import React, { useState } from "react";
import "./History.css";
import GenerateButton from "./GenerateButton";

function History(props) {
  const [array, setArray] = useState(props.colors);

  const handleReset = () => {
    setArray(props.colors.splice(1));
  };

  return (
    <div>
      <div className={"history"}>
        History - your last choices
        <button onClick={handleReset}>reset</button>
      </div>
      <div className="container-history">
        {props.colors.slice(1).map((color) => (
          <GenerateButton color={color} />
        ))}
      </div>
    </div>
  );
}

export default History;
