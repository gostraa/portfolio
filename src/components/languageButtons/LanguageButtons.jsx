import i18n from "../../i18n";
import { ButtonLang } from "./LanguageButtons.styled";

const LanguageButtons = () => {
  const changeLanguages = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ marginLeft: "auto" }}>
      <ButtonLang onClick={() => changeLanguages("en")}>en</ButtonLang>
      <ButtonLang onClick={() => changeLanguages("ua")}>ua</ButtonLang>
    </div>
  );
};

export default LanguageButtons;
