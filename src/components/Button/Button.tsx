import React from "react";

import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  variant = "solid",
  children,
  type = "text",
}: ButtonProps) => {
  if (
    typeof children === "string" ||
    (typeof children === "number" && children.toString().length === 1)
  ) {
    type = "icon";
  }
  return (
    <button className={`button button-${variant} button-${type}`}>
      {children}
    </button>
  );
};

export default Button;
