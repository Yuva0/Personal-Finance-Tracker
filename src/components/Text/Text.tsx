import React from "react";

import './Text.scss';
import { TextProps } from "./Text.types";

const Text = ({ children, size="medium", variant, className }: TextProps) => {
  if(variant === 'h1')
    return <h1 className={`text ${className?? className}`}>{children}</h1>;
  else if(variant === 'h2')
    return <h2 className={`text ${className}`}>{children}</h2>;
  else if (variant === 'h3')
    return <h3 className={`text ${className}`}>{children}</h3>;
  else if (variant === 'h4')
    return <h4 className={`text ${className}`}>{children}</h4>;
  else if (variant === 'h5')
    return <h5 className={`text ${className}`}>{children}</h5>;
  else if (variant === 'h6')
    return <h6 className={`text ${className}`}>{children}</h6>;
  else if (variant === 'p')
    return <p className={`text ${className}`}>{children}</p>;
  else if (variant === "label")
    return <span className={`text text-${variant} text-${size} ${className??''}`}>{children}</span>;
  else if (variant === "number")
    return (<span className={`text text-${size} text-${variant} ${className}`}>{children}</span>);

  return <span className={`text ${className}`}>{children}</span>;
};

export default Text;