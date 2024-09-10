import { projectImages } from "constants/constants";
import React from "react";
import {
  StyledDate,
  StyledProImg,
  StyledSlideItem,
  StyledTitleDescr,
} from "./MyProjectsList.styled";
import { useTranslation } from "react-i18next";

const SlideItem = ({ project, handleOpenModal }) => {
  const { t } = useTranslation();

  return (
    <StyledSlideItem
      onClick={() => handleOpenModal(project.name)}
      key={project.name}
    >
      <StyledProImg src={projectImages[project.image]} alt={project.name} />
      <StyledDate>{t(`projects.${project.date}`)}</StyledDate>
      <h3>{project.name}</h3>
      <StyledTitleDescr>{t(`projects.${project.title}`)}</StyledTitleDescr>
    </StyledSlideItem>
  );
};

export default SlideItem;
