import { handleDownloadCV } from "helpers/downloadCV";
import React, { useState } from "react";

const Button = ({ type, isInModal, text, children, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const width = isInModal ? "155px" : "180px";
  const height = isInModal ? "38px" : "56px";
  const background =
    type === "primary" ? "var(--primary-color)" : "var(--surface-secondary)";

  const buttonStyles = {
    display: "flex",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    background: background,
    border: isHovered ? "2px solid #7DFFAF" : "none",
    boxShadow: isHovered
      ? "0px 0px 48px 0px rgba(125, 255, 175, 0.24)"
      : "none",
    textDecoration: "none",
  };

  const spanStyles = {
    color: "var(--text-primary)",
    textAlign: "center",
    fontFamily: "Heebo, sans-serif",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.5",
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
      <span style={spanStyles}>{text}</span>
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
      <span style={spanStyles}>{text}</span>
    </button>
  );
};

export default Button;
