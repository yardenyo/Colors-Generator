import "./ChooseColor.css";
import { useState } from "react";
import History from "./History";

function ChooseColor() {
  const [color, setColor] = useState("");
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const [colors, setColors] = useState([]);

  const changeColor = () => {
    if (
      red < 0 ||
      red > 255 ||
      green < 0 ||
      green > 255 ||
      blue < 0 ||
      blue > 255 ||
      !red ||
      !green ||
      !blue
    ) {
      alert("Input must be between 0 and 255");
    } else {
      setColor(`rgb(${red}, ${green}, ${blue})`);
      setColors([...colors, color]);
    }
  };

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
        <History color={color} colors={colors} />
      </section>
    </div>
  );
}
export default ChooseColor;
