import React from 'react';

import { ButtonProps } from './Button.types';
import './Button.scss';

const Button = ({variant = "solid", children}:ButtonProps) => {
  return (
    <button className={`button button-${variant}`}>{children}</button>
  )
};

export default Button;