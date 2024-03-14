import React from "react";
import "./_card.scss";
import { Link } from "react-router-dom";
import { cardType } from "../../pages/Home/Types";
export const Card: React.FC<cardType> = ({ title, price, img, id }) => {
  return (
    <div className="card">
      <Link to={`film/${id}`}>
        <img src={img} alt="Фильм" />
        <h3 className="card__title">{title}</h3>
      </Link>
      <div className="card__bottom">
        <p className="cadt__price">от {price} ₽</p>
        <button className="card__btn">Купить</button>
      </div>
    </div>
  );
};
