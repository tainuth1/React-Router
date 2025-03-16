import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const back = () => {
    // navigate("/projects"); 
    navigate(-1)
  };
  return (
    <div>
      <button onClick={back} className="btn btn-primary">Go Back</button>
      <h1 className="text-center mt-5">View Project ID : {projectId}</h1>
    </div>
  );
};

export default ViewProject;
