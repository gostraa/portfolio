import i18n from "../../i18n";
import { ButtonLang } from "./LanguageButtons.styled";

const LanguageButtons = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <ButtonLang onClick={() => changeLanguage("en")}>en</ButtonLang>
      <ButtonLang onClick={() => changeLanguage("ua")}>ua</ButtonLang>
    </div>
  );
};

export default LanguageButtons;
