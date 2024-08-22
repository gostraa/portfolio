import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  StyledDate,
  StyledItem,
  StyledListProject,
  StyledProImg,
  StyledSlideItem,
  StyledSlideList,
  StyledTitleDescr,
} from "./MyProjectsList.styled";

import ModalInfo from "components/ModalInfo/ModalInfo";
import { projectImages, settings } from "constants/constants";

const ProjectsList = ({ projectsList }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpenModal = (name) => {
    const result = projectsList.filter((project) => project.name === name);
    setCurrentProject(result[0]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <StyledListProject>
          {projectsList.map((project) => (
            <StyledItem
              onClick={() => handleOpenModal(project.name)}
              key={project.name}
            >
              <img src={projectImages[project.image]} alt={project.name} />
              <StyledDate>{project.date}</StyledDate>
              <h3>{project.name}</h3>
              <StyledTitleDescr>{project.title}</StyledTitleDescr>
            </StyledItem>
          ))}
        </StyledListProject>
      ) : (
        <StyledSlideList {...settings}>
          {projectsList.map((project) => (
            <StyledSlideItem
              onClick={() => handleOpenModal(project.name)}
              key={project.name}
            >
              <StyledProImg
                src={projectImages[project.image]}
                alt={project.name}
              />
              <StyledDate>{project.date}</StyledDate>
              <h3>{project.name}</h3>
              <StyledTitleDescr>{project.title}</StyledTitleDescr>
            </StyledSlideItem>
          ))}
        </StyledSlideList>
      )}

      {isModalOpen && (
        <ModalInfo currentProject={currentProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectsList;
