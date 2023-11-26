import React from "react";

const Button = ({ type, isInHero, text, children, link, is, onClick }) => {
  const width = isInHero ? "155px" : "180px";
  const background =
    type === "primary" ? "var(--primary-color)" : "var(--surface-secondary)";
  const buttonStyles = {
    display: "flex",
    width: width,
    height: "56px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    background: background,
    textDecoration: "none",
  };

  const spanStyles = {
    color: "var(--text-primary)",
    textAlign: "center",
    fontFamily: "Heebo, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.5",
  };
  return is === "link" ? (
    <a
      href={link}
      style={{ width: width, background: background, ...buttonStyles }}
      target="_blank"
      rel="noopener noreferrer"
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
      onClick={() => onClick && onClick()}
    >
      {children}
      <span style={spanStyles}>{text}</span>
    </button>
  );
};

export default Button;
