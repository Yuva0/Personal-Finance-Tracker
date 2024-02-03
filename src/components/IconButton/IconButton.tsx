import React from "react";

import './IconButton.scss';
import { IconButtonProps } from "./IconButton.types";;

const IconButton = ({ icon, onClick, className, ...props }:IconButtonProps) => {
  return (
    <button className={`icon-button ${className??""}`} onClick={onClick} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;