import React, { useContext } from "react";
import "./History.css";
import GenerateButton from "./GenerateButton";
import { ColorsContext } from "./ColorsContext";

function History() {
  const { colorValue, colorsArr } = useContext(ColorsContext);
  const [color, setColor] = colorValue;
  const [colors, setColors] = colorsArr;

  const handleReset = () => {
    setColors([]);
    setColor("");
  };

  return (
    <div>
      <div className={"history"}>
        History - your last choices
        <button onClick={handleReset}>reset</button>
      </div>
      <div className="container-history">
        {colors.map((color, index) => (
          <GenerateButton color={color} key={index} />
        ))}
      </div>
    </div>
  );
}

export default History;
