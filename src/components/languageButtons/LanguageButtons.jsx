import { useState } from "react";
import i18n from "../../i18n";
import { SwitchWrapper } from "./LanguageButtons.styled";

const LanguageSwitch = () => {
  const [isChecked, setIsChecked] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLanguage = isChecked ? "ua" : "en";
    i18n.changeLanguage(newLanguage);
    setIsChecked(!isChecked);
  };

  return (
    <SwitchWrapper>
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={isChecked}
        onChange={toggleLanguage}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">UA</span>
      <span className="off">EN</span>
    </SwitchWrapper>
  );
};

export default LanguageSwitch;
