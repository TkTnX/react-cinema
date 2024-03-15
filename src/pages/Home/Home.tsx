import { useEffect, useState } from "react";
import axios from "axios";

import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterSearch } from "../../redux/slices/filterSlice";

import { Categories } from "../../components/Categories/Categories";
import { Sort } from "../../components/Sort/Sort";
import { Card } from "../../components/Card/Card";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";

import { searchValueType } from "../../App";
import { cardType } from "./Types";
import { fetchFilms } from "../../redux/slices/filmsSlice";
export const Home: React.FC<searchValueType> = () => {
  const searchValueState = useSelector(selectFilterSearch);
  const { filmsArr, loading } = useSelector((state: RootState) => state.films);

  const categoryValue = useSelector(
    (state: RootState) => state.filter.categoryValue
  );

  const setSortValue = useSelector(
    (state: RootState) => state.filter.sortValue
  );

  console.log(loading);

  const [currentPage, setCurrentPage] = useState(1);
  const sortValue = setSortValue.sortBy;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFilms({
        currentPage,
        categoryValue,
        sortValue,
      })
    );

    window.scrollTo(0, 0);
  }, [setSortValue, categoryValue, currentPage]);

  if (searchValueState === undefined) {
    return undefined;
  }

  const filteredFilms = filmsArr.filter((value: cardType) =>
    value.title.toLowerCase().includes(searchValueState.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="filter">
          <Categories />
          <Sort />
        </div>
      </div>
      <div className="container">
        <div className="catalog">
          {loading === "loading"
            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : filteredFilms.map((card: cardType) => (
                <Card {...card} key={card.id} />
              ))}
          {loading === "failed" && (
            <div className="not-found">
              <h2>Фильмы не найдены!</h2>
            </div>
          )}
        </div>
        <Pagination setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};
