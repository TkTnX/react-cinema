import { Categories } from "./../components/Categories/Categories";
import { Sort } from "./../components/Sort/Sort";
import { Card } from "../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { searchValueType } from "../App";
import { useNavigate } from "react-router-dom";

export type cardType = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  date: number;
  img: string;
  description: string;
  director: string;
};

export type SortDataType = {
  title: string;
  sortBy: string;
};

export const Home: React.FC<searchValueType> = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState<SortDataType>({
    title: "популярности",
    sortBy: "price",
  });
  const [categoryData, setCategoryData] = useState("Все");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://3bf477bc2596f0b4.mokky.dev/films?${
          categoryData !== "Все" ? `category=${categoryData}` : ""
        }&sortBy=${sortData.sortBy}`
      )
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, [sortData, categoryData]);

  if (searchValue === undefined) {
    return undefined;
  }

  const filteredFilms = data.filter((value: cardType) =>
    value.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="filter">
          <Categories setCategoryData={setCategoryData} />
          <Sort setSortData={setSortData} />
        </div>
      </div>
      <div className="container">
        <div className="catalog">
          {filteredFilms.length === 0 ? (
            <div className="not-found">
              <h2>Фильмы не найдены!</h2>
              <p>Похоже, у нас в каталоге нет таких фильмов.</p>
            </div>
          ) : isLoading ? (
            [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          ) : (
            filteredFilms.map((card: cardType) => (
              <Card {...card} key={card.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
