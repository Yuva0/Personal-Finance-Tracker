import React from "react";

import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  variant = "solid",
  children,
  type = "text",
  selected = false,
  onClick,
}: ButtonProps) => {

  const onClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
  }

  if (
    (typeof children === "string" ||
    typeof children === "number") && children.toString().length === 1
  ) {
    type = "icon";
  }
  return (
    <button className={`button button-${variant} button-${type} ${selected ? "button-selected":""}`} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
