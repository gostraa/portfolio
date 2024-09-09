import { createPortal } from "react-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { ReactComponent as ArrowLeftSvg } from "../../svg/ArrowLeft.svg";

import Button from "components/Button/Button";
import {
  Backdrop,
  Img,
  ImgWrapper,
  InfoWrap,
  ModalContainer,
  Primary,
  SvgWrap,
} from "./ModalInfo.styled";

import { animationSettingsModal, projectImages } from "constants/constants";
import { useTranslation } from "react-i18next";

const ModalInfo = ({ onClose, currentProject }) => {
  const { t } = useTranslation();

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
      <AnimatePresence>
        <ModalContainer {...animationSettingsModal}>
          <SvgWrap onClick={onClose}>
            <ArrowLeftSvg />
          </SvgWrap>
          <ImgWrapper>
            <Img
              src={projectImages[currentProject.image]}
              alt={currentProject.name}
            />
          </ImgWrapper>
          <InfoWrap>
            <p>{t(`projects.${currentProject.date}`)}</p>

            <h2>{currentProject.name}</h2>
            <p>{t(`projects.${currentProject.description}`)}</p>
            <p>
              {t("projects.My role in this project")} : {currentProject.role}
            </p>
            <p>
              {t("projects.Technologies")} : {currentProject.skills}
            </p>
            <p>
              {t("projects.I worked on")} :{" "}
              {t(`projects.${currentProject.workedOn}`)}
            </p>
            <Primary>{t("projects.Take a look at this project")}</Primary>
            <Button
              text={"Open Live Page"}
              isInModal={true}
              type={"primary"}
              link={currentProject.link}
            />
          </InfoWrap>
        </ModalContainer>
      </AnimatePresence>
    </Backdrop>,
    modal
  );
};

export default ModalInfo;
