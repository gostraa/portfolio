import { motion } from "framer-motion";

import { animationSettingsSkills, skillsArr } from "constants/constants";
import {
  SkillsList,
  SkillsSection,
  SkillsTitle,
  StarSecondSvg,
  StarSvg,
} from "./Skills.styled";

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
