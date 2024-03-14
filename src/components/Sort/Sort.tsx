import React, { useRef, useState } from "react";
import "./_sort.scss";
import { SortDataType } from "../../pages/Home/Home";

const sortList = [
  "Цене ↑",
  "Цене ↓",
  "Популярности ↑",
  "Популярности ↓",
  "Дате ↑",
  "Дате ↓",
];
const sortObj = [
  {
    title: "Цене ↑",
    sortBy: "price",
  },
  {
    title: "Цене ↓",
    sortBy: "-price",
  },
  {
    title: "Популярности ↑",
    sortBy: "rating",
  },
  {
    title: "Популярности ↓",
    sortBy: "-rating",
  },
  {
    title: "Дате ↑",
    sortBy: "date",
  },
  {
    title: "Дате ↓",
    sortBy: "-date",
  },
];

type SortType = {
  setSortData: (sortItem: SortDataType) => void;
};

export const Sort: React.FC<SortType> = ({ setSortData }) => {
  const [activeSortItem, setActiveSortItem] = useState(0);

  const [openPopup, setOpenPopup] = useState(false);
  const sortRef = useRef(null);

  const onClickSortItem = (index: number) => {
    setActiveSortItem(index);
    setOpenPopup(false);
  };

  document.body.addEventListener("click", (event) => {
    if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
      setOpenPopup(false);
    }
  });

  const onClickChangeSortItem = (index: number, sortItem: SortDataType) => {
    onClickSortItem(index);
    setSortData(sortItem);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__title" onClick={() => setOpenPopup(!openPopup)}>
        Сортировать по: <span>{sortList[activeSortItem]}</span>
      </div>
      {openPopup && (
        <ul className="sort__dropdown">
          {sortObj.map((sortItem, index) => {
            return (
              <li
                onClick={() => onClickChangeSortItem(index, sortItem)}
                className={activeSortItem === index ? "active" : ""}
                key={index}
              >
                {sortItem.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
