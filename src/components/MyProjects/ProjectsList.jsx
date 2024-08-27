import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledListProject, StyledSlideList } from "./MyProjectsList.styled";

import ModalInfo from "components/ModalInfo/ModalInfo";
import { settings } from "constants/constants";
import SlideItem from "./SlideItem";
import ProjectItem from "./ProjectItem";

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
            <ProjectItem project={project} handleOpenModal={handleOpenModal} />
          ))}
        </StyledListProject>
      ) : (
        <StyledSlideList {...settings}>
          {projectsList.map((project) => (
            <SlideItem project={project} handleOpenModal={handleOpenModal} />
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
