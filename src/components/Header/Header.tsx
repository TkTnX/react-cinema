import React from "react";
import "./_header.scss";
import logo from "./logo.svg";
import { searchValueType } from "../../App";
import { Link } from "react-router-dom";

export const Header: React.FC<searchValueType> = ({ setSearchValue }) => {
  if (setSearchValue === undefined) {
    return undefined;
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="Лого" />
                <h3 className="header__logo-title">REACT CINEMA</h3>
              </div>
            </Link>

            <div className="header__search">
              <input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(event.target.value);
                }}
                type="text"
                placeholder="Найти фильм"
              />
            </div>
          </div>
        </div>
      </header>
      <hr className="hr" />
    </>
  );
};
