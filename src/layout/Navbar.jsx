import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="container d-flex py-2 justify-content-between align-items-center">
        <h1 className="text-white">LOGO</h1>
        <ul className="d-flex m-0 gap-5 align-items-center list-unstyled">
          <li className="fs-4">
            <NavLink to={"/"} className="text-white">Home</NavLink>
          </li>
          <li className="fs-4">
            <NavLink to={"/about"} className="text-white">About</NavLink>
          </li>
          <li className="fs-4">
            <NavLink to={"/projects"} className="text-white">Projects</NavLink>
          </li>
          <li className="fs-4">
            <NavLink to={"/contact"} className="text-white">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
