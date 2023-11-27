import {
  StyledDate,
  StyledItem,
  StyledListProject,
  StyledTitleDescr,
} from "./MyProjectsList.styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ModalInfo from "components/ModalInfo/ModalInfo";
import { settings } from "constants/constants";

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
    <StyledListProject>
      {isMobile ? (
        projectsList.map((project) => (
          <StyledItem
            onClick={() => handleOpenModal(project.name)}
            key={project.name}
          >
            <div>
              <img
                src={project.image}
                alt={project.name}
                width={310}
                height={170}
              />
            </div>

            <StyledDate>{project.date}</StyledDate>

            <h3>{project.name}</h3>
            <StyledTitleDescr>{project.title}</StyledTitleDescr>
          </StyledItem>
        ))
      ) : (
        <Slider {...settings}>
          {projectsList.map((project) => (
            <StyledItem
              onClick={() => handleOpenModal(project.name)}
              key={project.name}
            >
              <img
                src={project.image}
                alt={project.name}
                width={300}
                height={170}
              />

              <StyledDate>{project.date}</StyledDate>

              <h3>{project.name}</h3>
              <StyledTitleDescr>{project.title}</StyledTitleDescr>
            </StyledItem>
          ))}
        </Slider>
      )}
      {isModalOpen && (
        <ModalInfo currentProject={currentProject} onClose={handleCloseModal} />
      )}
    </StyledListProject>
  );
};

export default ProjectsList;
