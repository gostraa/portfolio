import ProjectsList from "./ProjectsList";
import { StyledDescr, StyledSection, StyledTitle } from "./MyProject.styled";
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";
import { fetchProjects } from "actions";

const MyProjects = () => {
  const {
    data: projectsList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  return (
    <StyledSection id="projects">
      <StyledTitle>Projects</StyledTitle>
      <StyledDescr>Take a look at my highlighted projects</StyledDescr>
      {isLoading && (
        <div
          style={{
            with: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <RingLoader color={"#7dffaf"} />
        </div>
      )}
      {!isLoading && !isError && <ProjectsList projectsList={projectsList} />}
    </StyledSection>
  );
};

export default MyProjects;
