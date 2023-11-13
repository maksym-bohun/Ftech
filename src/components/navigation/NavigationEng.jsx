import React from "react";

import { Navigation } from "./navigationStyles";

const NavigationEng = ({
  openLanguagesListHandler,
  selectLanguage,
  currentLang,
  showLanguagesContainer,
  otherLang,
}) => {
  return (
    <Navigation className="centered">
      <div className="logo">FTECH</div>

      <div className="links">
        <ul className="list">
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">career</a>
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
        <button>contact</button>
      </div>
    </Navigation>
  );
};

export default NavigationEng;
