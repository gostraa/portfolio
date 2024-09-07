import { handleDownloadCV } from "helpers/downloadCV";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Button = ({ type, isInModal, text, children, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { t } = useTranslation();

  const width = isInModal ? "155px" : "185px";
  const height = isInModal ? "38px" : "66px";
  const background =
    type === "primary" ? "var(--primary-color)" : "var(--surface-secondary)";

  const buttonStyles = {
    display: "flex",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "12px",
    borderRadius: "8px",
    background: background,
    border: isHovered ? "1px solid #7DFFAF" : "1px solid",
    boxShadow: isHovered
      ? "0px 0px 48px 0px rgba(125, 255, 175, 0.24)"
      : "none",
    textDecoration: "none",
  };

  const spanStyles = {
    color: "var(--text-primary)",
    textAlign: "center",
    fontFamily: "Heebo, Manrope",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1",
  };

  return link ? (
    <a
      href={link}
      style={{
        width: width,
        height: height,
        background: background,
        ...buttonStyles,
      }}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
      <span style={spanStyles}>{t(text)}</span>
    </a>
  ) : (
    <button
      style={{
        border: "none",
        width: width,
        background: background,
        ...buttonStyles,
      }}
      onClick={handleDownloadCV}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
      <span style={spanStyles}>{t(text)}</span>
    </button>
  );
};

export default Button;
