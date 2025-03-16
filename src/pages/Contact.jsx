import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Contact</h1>
      <div className="d-flex justify-content-center gap-5 fs-1 mt-5">
        <Link to={"/contact/phone"}>Phone</Link>
        <Link to={"/contact/telegram"}>Telegram</Link>
        <Link to={"/contact/facebook"}>Facebook</Link>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
