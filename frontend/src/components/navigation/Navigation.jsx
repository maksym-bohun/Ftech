import React, { useEffect, useState } from "react";
import ukrainianFlag from "../../assets/ukraine.svg";
import englishFlag from "../../assets/england.svg";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/slices/languageSlice";
import NavigationUa from "./NavigationUa";
import NavigationEng from "./NavigationEng";

const Navigation = ({ lang, className, navRef, style = "default" }) => {
  const languages = [
    {
      name: "UA",
      icon: ukrainianFlag,
    },
    {
      name: "ENG",
      icon: englishFlag,
    },
  ];

  const [showLanguagesContainer, setShowLanguagesContainer] = useState(false);
  const dispatch = useDispatch();

  const openLanguagesListHandler = () => {
    setShowLanguagesContainer(true);
  };

  const selectLanguage = (e) => {
    const selectButton = e.target.closest(".select-button");

    if (selectButton) {
      const languageNameElement = selectButton.querySelector(".language__name");
      const selectedLanguage = languageNameElement.textContent;

      if (selectedLanguage === "UA") {
        dispatch(changeLanguage("UA"));
      } else if (selectedLanguage === "ENG") {
        dispatch(changeLanguage("ENG"));
      }
    }
    setShowLanguagesContainer(false);
  };

  return (
    <>
      {lang === "UA" && (
        <NavigationUa
          className={className}
          openLanguagesListHandler={openLanguagesListHandler}
          selectLanguage={selectLanguage}
          currentLang={languages[0]}
          showLanguagesContainer={showLanguagesContainer}
          otherLang={languages[1]}
          navRef={navRef}
          style={style}
        />
      )}
      {lang === "ENG" && (
        <NavigationEng
          className={className}
          openLanguagesListHandler={openLanguagesListHandler}
          selectLanguage={selectLanguage}
          currentLang={languages[1]}
          otherLang={languages[0]}
          showLanguagesContainer={showLanguagesContainer}
          navRef={navRef}
          style={style}
        />
      )}
    </>
  );
};

export default Navigation;
