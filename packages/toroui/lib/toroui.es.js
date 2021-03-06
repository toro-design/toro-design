import React from "react";
const Button = ({
  children,
  primary = false,
  onClick,
  backgroundColor = "#D1D5DB",
  color = "#1F2937"
}) => {
  const buttonStyles = {
    fontWeight: 700,
    padding: "10px 20px",
    border: 0,
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    backgroundColor: primary ? "#2563EB" : backgroundColor,
    color: primary ? "#F3F4F6" : color
  };
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick,
    style: buttonStyles
  }, children);
};
export { Button };
