import React from "react";
import { BadgeProps } from "./Badge.types";

import './Badge.scss';

const Badge = ({ label, selected }: BadgeProps) => {
  return (
    <div className={`badge ${selected ? "badge-selected" : ""}`}>{label}</div>
  );
};

export default Badge;
