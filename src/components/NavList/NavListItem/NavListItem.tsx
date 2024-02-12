import React from "react";

import "./NavListItem.scss";
import { NavListItemProps } from "./NavListItem.types";
import Badge from "../../Badge/Badge";
import Text from "../../Text/Text";

const NavListItem = ({
  title,
  selected = false,
  leadingIcon,
  trailingIcon,
  notificationCount,
}: NavListItemProps) => {
  return (
    <div
      className={`nav-list-item ${selected ? "nav-list-item-selected" : ""} `}
    >
      <div className="nav-list-item-container" tabIndex={0}>
        <div className="nav-list-item-start">
        {leadingIcon && <span className="nav-list-item-leading-icon">{leadingIcon}</span>}
        {title && <Text className="nav-list-item-title" selected={selected}>{title}</Text>}
        {trailingIcon && <span className="nav-list-item-trailing-icon">{trailingIcon}</span>}
        </div>
        <div className="nav-list-item-end">
          {notificationCount && <Badge label={notificationCount} selected={selected}/>}
        </div>
        
      </div>
    </div>
  );
};

export default NavListItem;
