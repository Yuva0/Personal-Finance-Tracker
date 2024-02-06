import { InputProps } from "./Input.types";

const Input = ({ value, onChange }:InputProps) => {
  return (
    <input value={value} onChange={onChange} />
  );
}

export default Input;