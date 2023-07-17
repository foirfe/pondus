import { Route, Routes } from "react-router-dom";
//Importing pages
import Home from "./pages/Home";
//Import of Towns
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
