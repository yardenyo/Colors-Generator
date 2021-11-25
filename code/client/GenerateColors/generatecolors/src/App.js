import './App.css';
import {useState} from "react";
import service from "./api";
import "./App.css";

function App() {
  const [color, setColor] = useState('#ffffff');

  const generateNewColorOnClick = () => {
    service.ColorsService.getRandomColor()
        .then(color => {
          console.log(color)
          setColor(color.color)
        })
  }

  return (
      <div className={'app'}>
        <button onClick={generateNewColorOnClick}>Click to generate a new color</button>
        <div className={'color'} style={{backgroundColor: color}}/>
      </div>
  );
}

export default App;
