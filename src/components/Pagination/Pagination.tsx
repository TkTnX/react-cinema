import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";
import { CurrentPageType } from "../../pages/Home/Types";

export const Pagination: React.FC<CurrentPageType> = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
