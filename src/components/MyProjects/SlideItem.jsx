import { projectImages } from "constants/constants";
import React from "react";
import {
  StyledDate,
  StyledProImg,
  StyledSlideItem,
  StyledTitleDescr,
} from "./MyProjectsList.styled";

const SlideItem = ({ project, handleOpenModal }) => {
  return (
    <StyledSlideItem
      onClick={() => handleOpenModal(project.name)}
      key={project.name}
    >
      <StyledProImg src={projectImages[project.image]} alt={project.name} />
      <StyledDate>{project.date}</StyledDate>
      <h3>{project.name}</h3>
      <StyledTitleDescr>{project.title}</StyledTitleDescr>
    </StyledSlideItem>
  );
};

export default SlideItem;
