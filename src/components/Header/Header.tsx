import React, { ChangeEvent, useCallback, useState, useRef } from "react";
import "./_header.scss";
import logo from "./logo.svg";
import { searchValueType } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterSearch,
  setSearchValue,
} from "../../redux/slices/filterSlice";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
export const Header: React.FC<searchValueType> = () => {
  const dispatch = useDispatch();
  const searchValueState = useSelector(selectFilterSearch);

  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  if (searchValueState === undefined) {
    return null;
  }

  const inputTimeOut = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 400),
    []
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    inputTimeOut(event.target.value);
    setValue(event.target.value);
  };

  const onClearInput = () => {
    inputRef.current?.focus();

    dispatch(setSearchValue(""));
    setValue("");
  };

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
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                type="text"
                placeholder="Найти фильм"
              />
              {searchValueState !== undefined && searchValueState.length > 0 ? (
                <button onClick={onClearInput}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3604 14.7022C16.5805 14.9224 16.7042 15.221 16.7042 15.5323C16.7042 15.8436 16.5805 16.1422 16.3604 16.3624C16.1402 16.5825 15.8416 16.7062 15.5303 16.7062C15.219 16.7062 14.9204 16.5825 14.7002 16.3624L8.50002 10.1602L2.29787 16.3604C2.07772 16.5806 1.77913 16.7043 1.46779 16.7043C1.15645 16.7043 0.857864 16.5806 0.637714 16.3604C0.417564 16.1403 0.293884 15.8417 0.293884 15.5304C0.293884 15.219 0.417564 14.9204 0.637714 14.7003L6.83986 8.50008L0.639667 2.29793C0.419516 2.07778 0.295837 1.77919 0.295837 1.46785C0.295837 1.15651 0.419516 0.857925 0.639667 0.637775C0.859817 0.417625 1.15841 0.293945 1.46974 0.293945C1.78108 0.293945 2.07967 0.417625 2.29982 0.637775L8.50002 6.83992L14.7022 0.636798C14.9223 0.416648 15.2209 0.292969 15.5322 0.292969C15.8436 0.292969 16.1422 0.416648 16.3623 0.636798C16.5825 0.856949 16.7062 1.15554 16.7062 1.46688C16.7062 1.77822 16.5825 2.0768 16.3623 2.29695L10.1602 8.50008L16.3604 14.7022Z"
                      fill="#452180"
                    />
                  </svg>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      <hr className="hr" />
    </>
  );
};
