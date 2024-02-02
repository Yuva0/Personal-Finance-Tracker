import React from "react";
import { NavListProps } from "./NavList.types";
import './NavList.scss';

const NavList = ({ children }: NavListProps) => {
  return <ul className="nav-list">{children}</ul>;
};

export default NavList;
