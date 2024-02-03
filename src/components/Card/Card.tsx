import React from "react";
import { CardProps } from "./Card.types";

import "./Card.scss";

const Card = ({ children, className }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
