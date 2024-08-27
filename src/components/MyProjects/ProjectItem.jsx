import React from "react";
import {
  StyledDate,
  StyledItem,
  StyledTitleDescr,
} from "./MyProjectsList.styled";
import { projectImages } from "constants/constants";

const ProjectItem = ({ project, handleOpenModal }) => {
  return (
    <StyledItem
      onClick={() => handleOpenModal(project.name)}
      key={project.name}
    >
      <img src={projectImages[project.image]} alt={project.name} />
      <StyledDate>{project.date}</StyledDate>
      <h3>{project.name}</h3>
      <StyledTitleDescr>{project.title}</StyledTitleDescr>
    </StyledItem>
  );
};

export default ProjectItem;
