import React from "react";

const Button = ({ type, isInHero, text, children, link }) => {
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
  return (
    <a
      href={link}
      style={{ width: width, background: background, ...buttonStyles }}
    >
      {children}
      <span style={spanStyles}>{text}</span>
    </a>
  );
};

export default Button;
