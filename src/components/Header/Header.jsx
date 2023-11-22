import { FaLaptopCode } from "react-icons/fa6";
import { ReactComponent as MenuBtnIcon } from "../../svg/List.svg";
// import { ReactComponent as MoonIcon } from "../../svg/MoonStars.svg";
// import { ReactComponent as SunIcon } from "../../svg/SunDim.svg";
import { StyledHeader } from "./Header.styled";
const Header = () => {
  const iconStyle = {
    width: "36px",
    height: "36px",
  };
  return (
    <StyledHeader>
      <FaLaptopCode color="#7BFFAF" style={iconStyle} />

      <MenuBtnIcon width={"36px"} height={"36px"} />
    </StyledHeader>
  );
};

export default Header;
