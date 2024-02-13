import { InputProps } from "./Input.types";
import './Input.scss';

const Input = ({ value, onChange }:InputProps) => {
  return (
    <input className="input" value={value} onChange={onChange} />
  );
}

export default Input;