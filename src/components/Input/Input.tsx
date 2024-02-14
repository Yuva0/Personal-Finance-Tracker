import React from "react";

import { InputProps } from "./Input.types";
import "./Input.scss";

const InternalInput = ({ value,onChange, onFocus, onBlur, className, ref }: InputProps) => {

  const [enteredValue, setEnteredValue] = React.useState("");

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <input
      ref={ref}
      className={`input ${className??className}`}
      onChange={onChangeHandler}
      onFocus={() => onFocus && onFocus()}
      onBlur={() => onBlur && onBlur()}
      value={value ?? enteredValue}
    />
  );
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InternalInput {...props} ref={ref} />;
});

export default Input;
