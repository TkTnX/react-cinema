import React, { useState } from "react";
import "./_categories.scss";

const categoriesList = ["Все", "Комедия", "Хоррор", "Фентези", "Драма"];

export type CategoriesDataType = {
  setCategoryData: (categoryItem: string) => void;
  categoryItem?: string;
};

export const Categories: React.FC<CategoriesDataType> = ({
  setCategoryData,
}) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const onClickSetCategoryData = (index: number, categoryItem: string) => {
    setActiveCategory(index);
    setCategoryData(categoryItem);
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
