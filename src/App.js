import { Outlet } from "react-router-dom";
import Navi from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Outlet/>
    </div>
  );
}

export default App;
