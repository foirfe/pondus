import { Route, Routes } from "react-router-dom";
//Importing pages
import Home from "./pages/Home";
//Importing components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
