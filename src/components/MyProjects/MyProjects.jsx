import ProjectsList from "./ProjectsList";
import { StyledDescr, StyledSection, StyledTitle } from "./MyProject.styled";
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";
import { fetchProjects } from "actions";
import { useTranslation } from "react-i18next";

const MyProjects = () => {
  const {
    data: projectsList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const { t } = useTranslation();

  return (
    <StyledSection id="projects">
      <StyledTitle>{t("Projects")}</StyledTitle>
      <StyledDescr>{t("Take a look at my highlighted projects")}</StyledDescr>
      {isLoading && (
        <div
          style={{
            with: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            maxHeight: '35px'
          }}
        >
          <RingLoader color={"#7dffaf"} />
        </div>
      )}
      {!isLoading && !isError && <ProjectsList projectsList={projectsList} />}
      {!isLoading && isError && (
        <StyledDescr>{t("Failed to load projects")}</StyledDescr>
      )}
    </StyledSection>
  );
};

export default MyProjects;
