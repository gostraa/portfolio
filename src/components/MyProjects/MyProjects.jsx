import projectsList from "../../projectsData";
import ProjectsList from "./ProjectsList";
import { StyledDescr, StyledSection, StyledTitle } from "./MyProject.styled";

const MyProjects = () => {
  return (
    <StyledSection>
      <StyledTitle>Projects</StyledTitle>
      <StyledDescr>Take a look at my highlighted projects</StyledDescr>
      <ProjectsList projectsList={projectsList} />
    </StyledSection>
  );
};

export default MyProjects;
