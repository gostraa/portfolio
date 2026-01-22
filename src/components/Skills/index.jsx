import { motion } from "framer-motion";

import { animationSettingsSkills, skillsArr } from "constants/constants";
import {
  SkillsList,
  SkillsSection,
  SkillsTitle,
  StarSecondSvg,
  StarSvg,
} from "./Skills.styled";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <SkillsSection id="skills">
      <StarSvg />
      <div>
        <SkillsTitle>{t("Skills")}</SkillsTitle>
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
