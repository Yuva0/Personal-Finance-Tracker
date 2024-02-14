import React, { MouseEventHandler } from "react";
import { DropdownProps } from "./Dropdown.types";
import "./Dropdown.scss";
import Input from "../Input/Input";

const Dropdown = ({ options, title, selectedValue }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedValue);
  const optionsListRef = React.useRef<HTMLUListElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  if (!options) {
    return null;
  }

  const focusHandler = () => {
    setIsOpen(true);
    document.addEventListener("click", clickOutsideHandler);
  };

  const clickOutsideHandler = (e: MouseEvent) => {
    if (
      (optionsListRef.current &&
      !optionsListRef.current.contains(e.target as Node)) &&
      (inputRef.current &&
      !inputRef.current.contains(e.target as Node))
    ) {
      setIsOpen(false);
    }
    document.removeEventListener("click", clickOutsideHandler);
  };

  const clickHandler = (e: any) => {
    document.removeEventListener("click", clickOutsideHandler);
    setValue(e.target.innerHTML);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <Input value={value} onFocus={focusHandler} ref={inputRef} />
      <ul
        className={`dropdown-list ${isOpen ? "" : "dropdown-none"}`}
        ref={optionsListRef}
      >
        {options.map((option, index) => {
          return (
            <li
              className="dropdown-list-item"
              key={index}
              onClick={clickHandler}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
