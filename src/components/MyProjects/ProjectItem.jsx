import React from "react";
import {
  StyledDate,
  StyledItem,
  StyledTitleDescr,
} from "./MyProjectsList.styled";
import { projectImages } from "constants/constants";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ project, handleOpenModal }) => {
  const { t } = useTranslation();

  return (
    <StyledItem
      onClick={() => handleOpenModal(project.name)}
      key={project.name}
    >
      <img src={projectImages[project.image]} alt={project.name} />
      <StyledDate>{t(`projects.${project.date}`)}</StyledDate>
      <h3>{project.name}</h3>
      <StyledTitleDescr>{t(`projects.${project.title}`)}</StyledTitleDescr>
    </StyledItem>
  );
};

export default ProjectItem;
