import { useState } from "react";
import { NavbarButton } from "./NavbarButton";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="nav-bar-logo">
          Pondus
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
