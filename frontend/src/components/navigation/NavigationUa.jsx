import React, { useState } from "react";

import { Navigation } from "./navigationStyles";
import { Link } from "react-router-dom";

const NavigationUa = ({
  openLanguagesListHandler,
  selectLanguage,
  currentLang,
  showLanguagesContainer,
  otherLang,
  className,
  navRef,
  style,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenuHandler = () => {
    setMenuOpened(!menuOpened);
  };

  window.addEventListener("scroll", () => {
    setMenuOpened(false);
  });

  return (
    <Navigation className={`${className || ""} nav`} ref={navRef}>
      <div className={`${menuOpened ? "menu-opened" : ""} `}>
        <div className="centered">
          <div className="container">
            <Link to="/" className="logo">
              FTECH
            </Link>

            <div className="links">
              <ul className="list">
                <li>
                  <a href="/#portfolio">Проєкти</a>
                </li>
                <li>
                  <Link to="/career">Карʼєра</Link>
                </li>
                <li className="language">
                  <div
                    className="language__button"
                    onClick={openLanguagesListHandler}
                  >
                    <img src={currentLang.icon}></img>
                    <span>{currentLang.name}</span>
                    <span className="language__triangle">&#9660;</span>
                  </div>
                  <div
                    className={`select-buttons-container ${
                      showLanguagesContainer ? "shown" : "hidden"
                    }`}
                  >
                    <div className="select-button" onClick={selectLanguage}>
                      <img src={currentLang.icon}></img>
                      <span className="language__name">{currentLang.name}</span>
                      <span className="language__triangle">&#9660;</span>
                    </div>
                    <div className="line"></div>
                    <div className="select-button" onClick={selectLanguage}>
                      <img src={otherLang.icon}></img>
                      <span className="language__name">{otherLang.name}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="/#contactUs" className="light button">
                Зв'язатись
              </a>
            </div>

            <div
              className={`menu-btn ${menuOpened && "open"}`}
              onClick={openMenuHandler}
            >
              <div className="menu-btn__burger"></div>
            </div>
          </div>
        </div>

        <div className={`menu ${menuOpened ? "" : "menu--hidden"}`}>
          <ul className="list">
            <li>
              <a href="/#portfolio">Проєкти</a>
            </li>
            <li>
              <Link to="/career">Карʼєра</Link>
            </li>
            <li className="language">
              <div
                className="language__button"
                onClick={openLanguagesListHandler}
              >
                <img src={currentLang.icon}></img>
                <span>{currentLang.name}</span>
                <span className="language__triangle">&#9660;</span>
              </div>
              <div
                className={`select-buttons-container ${
                  showLanguagesContainer ? "shown" : "hidden"
                }`}
              >
                <div className="select-button" onClick={selectLanguage}>
                  <img src={currentLang.icon}></img>
                  <span className="language__name">{currentLang.name}</span>
                  <span className="language__triangle">&#9660;</span>
                </div>
                <div className="line"></div>
                <div className="select-button" onClick={selectLanguage}>
                  <img src={otherLang.icon}></img>
                  <span className="language__name">{otherLang.name}</span>
                </div>
              </div>
            </li>
          </ul>
          <a href="/#contactUs" className="button">
            Зв'язатись
          </a>
        </div>
      </div>
    </Navigation>
  );
};

export default NavigationUa;
