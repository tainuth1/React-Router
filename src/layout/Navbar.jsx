import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="container d-flex py-2 justify-content-between align-items-center">
        <h1 className="text-white">LOGO</h1>
        <ul className="d-flex m-0 gap-5 align-items-center list-unstyled">
          <li className="fs-4">
            <Link to={"/"} className="text-white">Home</Link>
          </li>
          <li className="fs-4">
            <Link to={"/about"} className="text-white">About</Link>
          </li>
          <li className="fs-4">
            <Link to={"/projects"} className="text-white">Projects</Link>
          </li>
          <li className="fs-4">
            <Link to={"/contact"} className="text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
