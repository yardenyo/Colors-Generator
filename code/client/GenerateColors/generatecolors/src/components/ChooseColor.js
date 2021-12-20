import "./ChooseColor.css";
import React, { useContext, useEffect, useState } from "react";
import History from "./History";
import { ColorsContext } from "./ColorsContext";
import service from "../api";

function ChooseColor() {
  const { colorValue, colorsArr, clickHandler } = useContext(ColorsContext);
  const [color, setColor] = colorValue;
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const [colors, setColors] = colorsArr;
  const changeColor = () => {
    const colorRGB = `${red},${green},${blue}`;
    if (!red || !green || !blue) {
      console.log("input must be between 0 and 255 - cant enter the DB");
    } else {
      service.ColorsService.getUserColor(colorRGB).then((response) => {
        console.log(`the color ${response} entered the DB`);
      });
    }
    clickHandler(red, green, blue);
  };

  useEffect(() => {
    const rgb = color.replace("rgb(", "").replace(")", "").split(", ");
    setRed(rgb[0]);
    setGreen(rgb[1]);
    setBlue(rgb[2]);
    if (color === "") {
      setRed("");
      setGreen("");
      setBlue("");
    }
  }, [color]);

  return (
    <div className={"home"}>
      <section>
        <div className="container">
          <div>
            <p>Choose a color</p>
          </div>
          <div className="container-box" style={{ backgroundColor: color }} />
          <div>
            <div>
              RGB <h3>between 0-255</h3>
            </div>
            <div className={"input"}>
              <input
                type="number"
                placeholder="Red"
                name="Red"
                value={red}
                max="255"
                id="redValue"
                onChange={(e) => setRed(e.target.value)}
              />
              <input
                type="number"
                placeholder="Green"
                name="Green"
                value={green}
                max="255"
                id="greenValue"
                onChange={(e) => setGreen(e.target.value)}
              />
              <input
                type="number"
                placeholder="Blue"
                name="Blue"
                value={blue}
                max="255"
                id="blueValue"
                onChange={(e) => setBlue(e.target.value)}
              />
            </div>
          </div>
          <button className={"homeButton"} onClick={changeColor}>
            Click to Generate
          </button>
        </div>
        <History colors={colors} />
      </section>
    </div>
  );
}
export default ChooseColor;
