export type TextProps = {
  children?: React.ReactNode | [React.ReactNode];
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'number';
  weight?:"normal" | "bold"
  size?: 'vsmall' | 'small' | 'medium' | 'large' | 'vlarge';
  className?: string;
}