import IconButton from "../IconButton/IconButton";
import "./Pagination.scss";
import { PaginationProps } from "./Pagination.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const Pagination = ({
  selectedPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <nav className="pagination-container">
      <ul className="pagination-container-list">
        <li className="pagination-container-list-item">
          <IconButton
            icon={<FontAwesomeIcon width={12} icon={faArrowLeft} />}
          />
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`pagination-container-list-item ${
              selectedPage === index + 1 ? "pagination-container-list-item-selected" : ""
            }`}
            onClick={() => onPageChange?.(index + 1)}
          >
            <Button>{index + 1}</Button>
          </li>
        ))}
        <li className="pagination-container-list-item">
          <IconButton
            icon={<FontAwesomeIcon width={12} icon={faArrowRight} />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
