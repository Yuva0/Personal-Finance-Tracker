import React from "react";

import "./NavListItem.scss";
import { NavListItemProps } from "./NavListItem.types";

const NavListItem = ({
  title,
  selected = false,
  leadingIcon,
  trailingIcon,
}: NavListItemProps) => {
  return (
    <div
      className={`nav-list-item ${selected ? "nav-list-item-selected" : ""} `}
    >
      <div className="nav-list-item-container" tabIndex={0}>
        <span className="nav-list-item-leading-icon">{leadingIcon}</span>
        <span className="nav-list-item-title">{title}</span>
        <span className="nav-list-item-trailing-icon">{trailingIcon}</span>
      </div>
    </div>
  );
};

export default NavListItem;
