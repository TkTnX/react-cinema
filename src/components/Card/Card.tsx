import React from "react";
import "./_card.scss";
import { cardType } from "../../pages/Home";

export const Card: React.FC<cardType> = ({ title, price, img }) => {
  return (
    <div className="card">
      <img src={img} alt="Фильм" />
      <h3 className="card__title">{title}</h3>
      <div className="card__bottom">
        <p className="cadt__price">от {price} ₽</p>
        <button className="card__btn">Купить</button>
      </div>
    </div>
  );
};
