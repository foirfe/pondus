import { useState } from "react";
import { Link } from "react-router-dom";
//Components
import NavbarDropdown from "./NavbarDropdown";
import Logo from "../img/logo-small.png";
//Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleMobileDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
    }
  };
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="nav-bar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="logo" className="logo-img" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" onClick={handleMobileDropdown}>
              Byer <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdown && <NavbarDropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="vores-pudsere"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Vores pudsere
            </Link>
          </li>
          <li className="nav-item">
            <Link to="kontakt" className="nav-links" onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
