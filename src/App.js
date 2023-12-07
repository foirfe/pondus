import "./style/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
//Importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
//Importing components
import Navbar from "./components/Navbar";
//import Town from "./pages/Town";
import OurCleaners from "./pages/OurCleaners";
import Footer from "./components/Footer";
import WindowCleaning from "./pages/WindowCleaning";
import SolarCells from "./pages/SolarCells";

function App() {
  return (
    <div className="App">
      <Footer />
      <Navbar />
      <Routes>
        <Route path="/pondus" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/vinduspudsning" element={<WindowCleaning />} />
        {/* <Route path="/by/:slug" element={<Town />} />*/}
        <Route path="/solceller" element={<SolarCells />} />
        <Route path="/pondus-vision" element={<OurCleaners />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
