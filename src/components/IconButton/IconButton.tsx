import React from "react";

import './IconButton.scss';
import { IconButtonProps } from "./IconButton.types";
import Button from "../Button/Button";

const IconButton = ({ icon, onClick, className, ...props }:IconButtonProps) => {
  
  const onClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    onClick?.(e);
  }

  return (
    <Button type="icon" className={`icon-button ${className??""}`} onClick={onClickHandler} {...props}>
      {icon}
    </Button>
  );
};

export default IconButton;