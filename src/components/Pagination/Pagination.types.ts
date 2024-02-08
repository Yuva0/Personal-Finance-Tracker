export type PaginationProps = {
  selectedPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}