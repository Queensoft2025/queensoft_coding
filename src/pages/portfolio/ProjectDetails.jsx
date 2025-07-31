// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../../data/portfolioData";



const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === parseInt(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p><strong>Category:</strong> {project.category}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
