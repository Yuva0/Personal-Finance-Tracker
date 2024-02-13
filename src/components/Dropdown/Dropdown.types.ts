export type DropdownProps = {
  options: {
    value: string;
    label: string;
  }[];
  title: string;
  selectedValue: string;
}