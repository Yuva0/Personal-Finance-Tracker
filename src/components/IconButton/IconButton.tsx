import React from "react";

import './IconButton.scss';
import { IconButtonProps } from "./IconButton.types";;

const IconButton = ({ icon, onClick, className, ...props }:IconButtonProps) => {
  
  const onClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    onClick?.(e);
  }

  return (
    <button className={`icon-button ${className??""}`} onClick={onClickHandler} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;