import React, { useState } from "react";
import "./_categories.scss";

const categoriesList = ["Все", "Комедии", "Ужасы", "Фантастика", "Драма"];

export const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ul className="categories">
      {categoriesList.map((categoryItem, index) => {
        return (
          <li onClick={() => setActiveCategory(index)} key={index}>
            <button className={activeCategory === index ? "active" : ""}>
              {categoryItem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
