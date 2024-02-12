export type ButtonProps = {
  variant?: "solid" | "outline";
  type?: "icon" | "text";
  children: string | number | React.ReactNode;
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  selected?: boolean;
}