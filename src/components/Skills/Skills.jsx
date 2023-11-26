import {
  SkillsList,
  SkillsSection,
  SkillsTitle,
  StarSecondSvg,
  StarSvg,
} from "./Skills.styled";
const skillsArr = [
  "HTML5",
  "CSS",
  "Responsive/Adaptive Design",
  "JavaScript",
  "React",
  "Redux",
  "Redux-toolkit",
  "REST API",
  "Node.js",
  "MongoDB",
  "GIT",
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <StarSvg />
      <div>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          {skillsArr.map((skill) => {
            return <li>{skill}</li>;
          })}
        </SkillsList>
      </div>
      <StarSecondSvg />
    </SkillsSection>
  );
};

export default Skills;
