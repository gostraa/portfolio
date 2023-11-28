import { animationSettingsSkills } from "constants/constants";
import {
  SkillsList,
  SkillsSection,
  SkillsTitle,
  StarSecondSvg,
  StarSvg,
} from "./Skills.styled";

import { motion } from "framer-motion";
const skillsArr = [
  "HTML5",
  "CSS",
  "CSS-Grid",
  "Framer Motion",
  "Responsive/Adaptive Design",
  "JavaScript",
  "React",
  "Redux",
  "Redux-toolkit",
  "Styled Components",
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
          {skillsArr.map((skill, i) => {
            return (
              <motion.li key={skill} custom={i} {...animationSettingsSkills}>
                {skill}
              </motion.li>
            );
          })}
        </SkillsList>
      </div>
      <StarSecondSvg />
    </SkillsSection>
  );
};

export default Skills;
