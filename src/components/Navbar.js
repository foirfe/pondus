import { useState } from "react";
import { NavLink } from "react-router-dom";
//Components
//import NavbarDropdown from "./NavbarDropdown";
import Logo from "../img/logo-transparent.png";
//Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [click, setClick] = useState(false);
  //const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  /* const onMouseEnter = () => {
  if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  */
  /*
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
*/
  /*const handleMobileDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
    }
  };
  */
  return (
    <>
      <nav className="nav-bar">
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" className="nav-bar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="logo" className="logo-img" />
          </NavLink>
          {/* BYER
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="nav-links dropdown-btn"
              onClick={handleMobileDropdown}
            >
              Byer <FontAwesomeIcon icon={faCaretDown} />
              {dropdown && <NavbarDropdown closeMobileMenu={closeMobileMenu} />}
            </div>
          </li>
        */}
          <div className="links-container">
            <div className="nav-item">
              <NavLink
                to="/vinduspudsning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Vinduspudsning
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/solceller"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Solceller
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink
                to="pondus-vision"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hvem er Pondus?
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/"
                className="nav-links contact"
                onClick={closeMobileMenu}
              >
                Kontakt
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
