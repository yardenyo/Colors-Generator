import React, { useState, createContext } from "react";

export const ColorsContext = createContext(undefined);

export const ColorsProvider = (props) => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const changeColor = (redValue, greenValue, blueValue) => {
    if (
      +redValue < 0 ||
      +redValue > 255 ||
      +greenValue < 0 ||
      +greenValue > 255 ||
      +blueValue < 0 ||
      +blueValue > 255 ||
      !redValue ||
      !greenValue ||
      !blueValue
    ) {
      console.log("Input must be between 0 and 255");
    } else {
      const newColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      setColor(newColor);
      setColors((colors) => [...colors, newColor]);
    }
  };

  return (
    <ColorsContext.Provider
      value={{
        colorValue: [color, setColor],
        colorsArr: [colors, setColors],
        clickHandler: changeColor,
      }}
    >
      {props.children}
    </ColorsContext.Provider>
  );
};
