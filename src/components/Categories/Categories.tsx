import React, { useState } from "react";
import "./_categories.scss";
import { useDispatch } from "react-redux";
import { setCategoryValue } from "../../redux/slices/filterSlice";
import { CategoriesDataType } from "./Types";
const categoriesList = ["Все", "Комедия", "Хоррор", "Фентези", "Драма"];

export const Categories: React.FC<CategoriesDataType> = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const dispatch = useDispatch();

  const onClickSetCategoryData = (index: number, categoryItem: string) => {
    setActiveCategory(index);
    dispatch(setCategoryValue(categoryItem));
  };

  return (
    <ul className="categories">
      {categoriesList.map((categoryItem, index) => {
        return (
          <li
            onClick={() => onClickSetCategoryData(index, categoryItem)}
            key={index}
          >
            <button className={activeCategory === index ? "active" : ""}>
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
