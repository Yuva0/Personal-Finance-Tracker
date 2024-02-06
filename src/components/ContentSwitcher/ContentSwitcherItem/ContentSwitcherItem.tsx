import React from "react";
import { ContentSwitcherItemProps } from "./ContentSwitcherItem.types";

import Text from "../../Text/Text";
import './ContentSwitcherItem.scss';

const ContentSwitcherItem = ({label, selected, className}:ContentSwitcherItemProps) => {
  return (
    <button tabIndex={0} className={`content-switcher-item ${className?className:""} ${selected?"content-switcher-item-selected":""}`}>
      <Text size="small" variant="label">{label}</Text>
    </button>
  )
}

export default ContentSwitcherItem;