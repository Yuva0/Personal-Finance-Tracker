import React from "react";

import './IconButton.scss';
import { IconButtonProps } from "./IconButton.types";;

const IconButton = ({ icon, onClick, ...props }:IconButtonProps) => {
  return (
    <button className="icon-button" onClick={onClick} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;