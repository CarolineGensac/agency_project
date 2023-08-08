import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <nav className="nav">

      <h1 className="nav__logo">Webistic</h1>
      <ul className="nav__menu">
        <li>
          <DarkModeButton />
        </li>
        <li className="nav__menu__item">
          <Link to="/home" className="nav__menu__item__a">
            Home
          </Link>
        </li>
        <li className="nav__menu__item">
          <Link to="/about" className="nav__menu__item__a">
            About
          </Link>
        </li>
        <li className="nav__menu__item">
          <Link to="/works" className="nav__menu__item__a">
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
