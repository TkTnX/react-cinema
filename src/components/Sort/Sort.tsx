import React, { useRef, useState } from "react";
import "./_sort.scss";

const sortList = ["Цене", "Популярности", "Дате"];

export const Sort: React.FC = () => {
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

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__title" onClick={() => setOpenPopup(!openPopup)}>
        Сортировать по: <span>{sortList[activeSortItem]}</span>
      </div>
      {openPopup && (
        <ul className="sort__dropdown">
          {sortList.map((sortItem, index) => {
            return (
              <li
                onClick={() => onClickSortItem(index)}
                className={activeSortItem === index ? "active" : ""}
                key={index}
              >
                {sortItem}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
