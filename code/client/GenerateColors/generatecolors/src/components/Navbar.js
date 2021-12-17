import React, { useState } from "react";
import "./Navbar.css";
import service from "../api";

function Navbar() {
  const [color, setColor] = useState("");

  const generateNewColorOnClick = () => {
    service.ColorsService.getRandomColor().then((color) => {
      console.log(color);
      setColor(color.color);
      console.log(color.color);
    });
  };

  return (
    <section>
      <div className="navbar-dark">
        <div>
          <a href="javascript:window.location.reload(true)">
            <h1>Color Generator</h1>
          </a>
        </div>

        <div>
          <a className={"href"} onClick={generateNewColorOnClick}>
            <h2>Random</h2>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
