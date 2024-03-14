import React from "react";
import { Link } from "react-router-dom";
import s from "./NotFound.module.scss";
export const NotFound: React.FC = () => {
  return (
    <div className={s.notFound}>
      <h2>Похоже, страница не найдена 😔</h2>
      <p>
        Пожалуйста, вернитесь
        <Link className={s.btn} to="/">
          на главную
        </Link>
      </p>
    </div>
  );
};
