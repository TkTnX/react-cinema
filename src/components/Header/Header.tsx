import React from "react";
import "./_header.scss";
import logo from "./logo.svg";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <img src={logo} alt="Лого" />
              <h3 className="header__logo-title">REACT CINEMA</h3>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Найти фильм" />
            </div>
          </div>
        </div>
      </header>
      <hr className="hr" />
    </>
  );
};
