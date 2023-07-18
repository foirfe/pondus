import { useState } from "react";
import towns from "../towns.json";
import { Link } from "react-router-dom";

export default function NavbarDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {towns.map((town) => (
          <li key={town.id}>
            <Link to={`/${town.slug}`} onClick={() => setClick(false)}>
              {town.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
