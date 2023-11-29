import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./components/main/Main";
import { changeLanguage } from "./store/slices/languageSlice";
import CaseStudyPage from "./pages/CaseStudyPage";
import Greeting from "./pages/Greeting";
import CareerPage from "./pages/CareerPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith("en")) {
      dispatch(changeLanguage("ENG"));
    } else if (userLanguage.startsWith("uk")) {
      dispatch(changeLanguage("UA"));
    } else {
      dispatch(changeLanguage("ENG"));
    }
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/formSubmitted" element={<Greeting />} />
        <Route path="/caseStudy/:projectName" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
