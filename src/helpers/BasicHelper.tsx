export function classNameModifier(
  refArray:
    | React.RefObject<HTMLImageElement>[]
    | React.RefObject<HTMLDivElement>[],
  className: string,
  action: string
){
  refArray.map((ref) => {
    if (action === "add") {
      ref.current?.classList.add(className);
    } else if (action === "remove") {
      ref.current?.classList.remove(className);
    }
  });
}
