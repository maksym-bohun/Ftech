import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Main from "./components/main/Main";

function App() {
  const aboutUsRef = useRef(null);
  const mailImageRef = useRef(null);
  const [mailImageIsVisible, setMailImageIsVisible] = useState(false);
  const [mailBounce, setMailBounce] = useState(false);
  const [currentLang, setCurrentLang] = useState("UA");

  const language = useSelector((state) => state.language);

  setInterval(() => {
    setMailBounce(true);
  }, 20000);

  setInterval(() => {
    setMailBounce(false);
  }, 22100);

  const scrollHandler = () => {
    if (window.scrollY > aboutUsRef.current.scrollHeight - 100)
      setMailImageIsVisible(true);
    else {
      setMailImageIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setCurrentLang(language.name);
    console.log(language);
  }, [language]);

  useEffect(() => {}, [currentLang]);

  return (
    <Main
      lang={language.name}
      mailImageRef={mailImageRef}
      aboutUsRef={aboutUsRef}
      mailImageIsVisible={mailImageIsVisible}
      mailBounce={mailBounce}
    />
  );
}

export default App;
