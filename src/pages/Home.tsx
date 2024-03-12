import { Header } from "./../components/Header/Header";
import { Categories } from "./../components/Categories/Categories";
import { Sort } from "./../components/Sort/Sort";
import { Card } from "../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "../components/Skeleton/Skeleton";

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

export const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://3bf477bc2596f0b4.mokky.dev/films")
      .then((res) => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="filter">
            <Categories />
            <Sort />
          </div>
        </div>
        <div className="container">
          <div className="catalog">
            {isLoading
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : data.map((card: cardType) => <Card {...card} key={card.id} />)}
          </div>
        </div>
      </main>
    </>
  );
};
