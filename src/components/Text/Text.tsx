import React, {forwardRef} from "react";

import './Text.scss';
import { TextProps } from "./Text.types";

const TextContainer = ({ children, size="medium", variant, className, weight="normal" }: TextProps) => {
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
    return <span className={`text text-${variant} text-${size} ${className??''} text-${weight}`}>{children}</span>;
  else if (variant === "number")
    return (<span className={`text text-${size} text-${variant} ${className??''} text-${weight}`}>{children}</span>);

  return <span className={`text ${className}`}>{children}</span>;
};

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  return <TextContainer {...props} forwardedRef={ref}>{props.children}</TextContainer>;
});


export default Text;