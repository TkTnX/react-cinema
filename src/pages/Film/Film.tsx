import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Film.module.scss";

export type FilmType = {
  id: number;
  title: string;
  category: string;
  date: number;
  img: string;
  description: string;
  director: string;
};

export const Film: React.FC = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<FilmType | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://3bf477bc2596f0b4.mokky.dev/films/${id}`)
      .then((res) => setFilm(res.data))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, []);

  if (film === null) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className={styles.film}>
      <div className={styles.film__wrapper}>
        <img className={styles.film__img} src={film.img} alt={film.title} />
        <div className={styles.film__desc}>
          <h2 className={styles.film__title}>{film.title}</h2>
          <div className={styles.film__dateCategory}>
            <p className={styles.film__date}>{film.date}</p>
            <p className={styles.film__category}>{film.category}</p>
          </div>
          <p className={styles.film__description}>
            <b>СЮЖЕТ ФИЛЬМА «{film.title}»</b>: {film.description}
          </p>
          <p className={styles.film__director}>
            <b>Режиссер</b> {film.director}
          </p>
        </div>
      </div>
    </div>
  );
};
