import React, { useEffect, useState } from "react";
import ukrainianFlag from "../../assets/ukraine.svg";
import englishFlag from "../../assets/england.svg";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/slices/languageSlice";
import NavigationUa from "./NavigationUa";
import NavigationEng from "./NavigationEng";

const Navigation = ({ lang }) => {
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
  const [currentLang, setCurrentLang] = useState(languages[0]);
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

  console.log(" LANG", lang);
  return (
    <>
      {lang === "UA" && (
        <NavigationUa
          openLanguagesListHandler={openLanguagesListHandler}
          selectLanguage={selectLanguage}
          currentLang={languages[0]}
          showLanguagesContainer={showLanguagesContainer}
          otherLang={languages[1]}
        />
      )}
      {lang === "ENG" && (
        <NavigationEng
          openLanguagesListHandler={openLanguagesListHandler}
          selectLanguage={selectLanguage}
          currentLang={languages[1]}
          otherLang={languages[0]}
          showLanguagesContainer={showLanguagesContainer}
        />
      )}
    </>
  );
};

export default Navigation;
