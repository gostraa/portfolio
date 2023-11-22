import Button from "components/Button/Button";
import { ReactComponent as ArrowLeftSvg } from "../../svg/ArrowLeft.svg";
import { createPortal } from "react-dom";
import {
  Backdrop,
  Img,
  ImgWrapper,
  InfoWrap,
  ModalContainer,
  Primary,
  SvgWrap,
} from "./ModalInfo.styled";

import { useEffect } from "react";

const ModalInfo = ({ onClose, currentProject }) => {
  console.log(currentProject.name);
  const modal = document.querySelector("#modal");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <SvgWrap onClick={onClose}>
          <ArrowLeftSvg />
        </SvgWrap>
        <ImgWrapper>
          <Img src={currentProject.image} alt={currentProject.name} />
        </ImgWrapper>
        <InfoWrap>
          <p>{currentProject.date}</p>

          <h2>{currentProject.name}</h2>
          <p>{currentProject.description}</p>
          <p>My role in this project : {currentProject.role}</p>
          <p>Technologies : {currentProject.skills}</p>

          <p>I`m worked on : {currentProject.workedOn}</p>
          <Primary>Take a look at this project</Primary>
          <Button
            text={"Github Pages"}
            type={"primary"}
            link={currentProject.link}
          />
        </InfoWrap>
      </ModalContainer>
    </Backdrop>,
    modal
  );
};

export default ModalInfo;
