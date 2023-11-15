import React, { useState } from "react";

import { Navigation } from "./navigationStyles";

const NavigationUa = ({
  openLanguagesListHandler,
  selectLanguage,
  currentLang,
  showLanguagesContainer,
  otherLang,
}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenuHandler = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Navigation>
      <div className={`${menuOpened ? "menu-opened" : ""} `}>
        <div className="container centered">
          <div className="logo">FTECH</div>

          {/* <div className="links">
        <ul className="list">
          <li>
            <a href="#">Проєкти</a>
          </li>
          <li>
            <a href="#">Карʼєра</a>
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
        <button>Зв'язатись</button>
      </div> */}
          <div
            className={`menu-btn ${menuOpened && "open"}`}
            onClick={openMenuHandler}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>

        <div className={`menu ${menuOpened ? "" : "menu--hidden"}`}>
          <ul className="list">
            <li>
              <a href="#">Проєкти</a>
            </li>
            <li>
              <a href="#">Карʼєра</a>
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
          <button>Зв'язатись</button>
        </div>
      </div>
    </Navigation>
  );
};

export default NavigationUa;
