import "./App.css";
import ChooseColor from "./components/ChooseColor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <ChooseColor />
    </div>
  );
}

export default App;
