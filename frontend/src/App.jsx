import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/main/Main";
import { changeLanguage } from "./store/slices/languageSlice";
import CaseStudyPage from "./pages/CaseStudyPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Greeting from "./pages/Greeting";
import CareerPage from "./pages/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  { path: "/caseStudy/:projectName", element: <CaseStudyPage /> },
  { path: "/formSubmitted", element: <Greeting /> },
  { path: "/career", element: <CareerPage /> },
]);

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

  return <RouterProvider router={router} />;
}

export default App;
