import "./App.css";
import ChooseColor from "./components/ChooseColor";
import Navbar from "./components/Navbar";
import { ColorsProvider } from "./components/ColorsContext";

function App() {
  return (
    <ColorsProvider>
      <div className={"app"}>
        <Navbar />
        <ChooseColor />
      </div>
    </ColorsProvider>
  );
}

export default App;
