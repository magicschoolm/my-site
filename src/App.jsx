import "./App.css";
import { FunctionSample } from "./component/functionsample.jsx";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <FunctionSample handleClick={handleClick} />
    </>
  );
}

export default App;