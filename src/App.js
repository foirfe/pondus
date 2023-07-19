import "./style/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
//Importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
//Importing components
import Navbar from "./components/Navbar";
import Town from "./pages/Town";
import OurCleaners from "./pages/OurCleaners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Town />} />
        <Route path="/vores-pudsere" element={<OurCleaners />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
