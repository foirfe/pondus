import "./style/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
//Importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
//Importing components
import Navbar from "./components/Navbar";
import Town from "./pages/Town";
import OurCleaners from "./pages/OurCleaners";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/pondus" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/by/:slug" element={<Town />} />
        <Route path="/vores-pudsere" element={<OurCleaners />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
