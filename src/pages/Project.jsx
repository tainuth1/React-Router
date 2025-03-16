import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Project</h1>
      <div className="d-flex justify-content-center gap-5 fs-1 mt-5">
        <Link to={"/projects/1"}>Project 1</Link>
        <Link to={"/projects/2"}>Project 2</Link>
        <Link to={"/projects/3"}>Project 3</Link>
        <Link to={"/projects/4"}>Project 4</Link>
      </div>
    </div>
  );
};

export default Project;
