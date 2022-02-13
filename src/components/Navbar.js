import React from "react";
import { Link } from "react-router-dom";
import D20 from "./D20";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link className="logo" to="/">
          Die
          <D20 className="d20" />
          Sposal{" "}
        </Link>
        <ul className="navList">
          <li className="navListItem">
            <Link className="navLink" to="/reviews">
              Reviews
            </Link>
          </li>
          <li className="navListItem">
            <Link className="navLink" to="/services">
              Services
            </Link>
          </li>
          <li className="navListItem">
            <Link className="navLink" to="/cleanse">
              Cleanse Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
