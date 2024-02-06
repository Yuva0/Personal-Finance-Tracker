import React from "react";
import { ContentSwitcherProps } from "./ContentSwitcher.types";

import './ContentSwitcher.scss';

const ContentSwitcher = ({children, className}:ContentSwitcherProps) => {
  return (
    <div role="tablist" className={`content-switcher ${className?className:""}`}>
      {children}
    </div>
  );
}
export default ContentSwitcher;