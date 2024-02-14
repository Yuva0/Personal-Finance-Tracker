export type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: string;
  placeholder?: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}