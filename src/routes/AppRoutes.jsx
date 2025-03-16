import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ViewProject from "../pages/ViewProject";
import Phone from "../pages/Phone";
import Telegram from "../pages/Telegram";
import Facebook from "../pages/Facebook";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:projectId" element={<ViewProject />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="phone" element={<Phone />} />
          <Route path="telegram" element={<Telegram />} />
          <Route path="facebook" element={<Facebook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
