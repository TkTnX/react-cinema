import { Categories } from "../../components/Categories/Categories";
import { Sort } from "../../components/Sort/Sort";
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchValueType } from "../../App";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { SortDataType, cardType } from "./Types";

export const Home: React.FC<searchValueType> = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState<SortDataType>({
    title: "популярности",
    sortBy: "price",
  });
  const [categoryData, setCategoryData] = useState("Все");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://3bf477bc2596f0b4.mokky.dev/films?limit=4&page=${currentPage}&${
          categoryData !== "Все" ? `category=${categoryData}` : ""
        }&sortBy=${sortData.sortBy}`
      )
      .then((res) => setData(res.data.items))
      .finally(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [sortData, categoryData, currentPage]);

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
          {isLoading
            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : filteredFilms.map((card: cardType) => (
                <Card {...card} key={card.id} />
              ))}
          {filteredFilms.length === 0 && (
            <div className="not-found">
              <h2>Фильмы не найдены!</h2>
            </div>
          )}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};
