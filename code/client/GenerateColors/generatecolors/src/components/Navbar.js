import React, { useContext } from "react";
import "./Navbar.css";
import service from "../api";
import { ColorsContext } from "./ColorsContext";

function Navbar() {
  const { clickHandler } = useContext(ColorsContext);
  const changeColor = clickHandler;

  const generateNewColorOnClick = () => {
    service.ColorsService.getRandomColor().then((color) => {
      let colorArray = color.color.split(",");
      changeColor(colorArray[0], colorArray[1], colorArray[2]);
    });
  };

  return (
    <section>
      <div className="navbar-dark">
        <div>
          <h1>Color Generator</h1>
        </div>
        <div>
          <h2 onClick={generateNewColorOnClick}>Random</h2>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
