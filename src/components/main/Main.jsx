import React, { useEffect, useRef, useState } from "react";
import AboutUs from "../aboutUs/AboutUs";
import backgroundTriangle1 from "../../assets/backgroundTriangle1.svg";
import backgroundTriangle2 from "../../assets/backgroundTriangle2.svg";
import backgroundTriangle3 from "../../assets/backgroundTriangle3.svg";
import backgroundTriangle4 from "../../assets/backgroundTriangle4.svg";
import backgroundTriangle5 from "../../assets/backgroundTriangle5.svg";
import backgroundTriangle6 from "../../assets/backgroundTriangle6.svg";
import backgroundTriangle7 from "../../assets/backgroundTriangle7.svg";
import backgroundTriangle8 from "../../assets/backgroundTriangle8.svg";
import backgroundTriangle9 from "../../assets/backgroundTriangle9.svg";
import backgroundTriangle9_1 from "../../assets/backgroundTriangle9.1.svg";
import backgroundTriangle10 from "../../assets/backgroundTriangle10.svg";
import backgroundTriangle11 from "../../assets/backgroundTriangle11.svg";
import backgroundTriangle12 from "../../assets/backgroundTriangle12.svg";
import backgroundTriangle13 from "../../assets/backgroundTriangle13.svg";
import WhoWeAre from "../whoWeAre/WhoWeAre";
import ForWho from "../forWho/ForWho";
import AboutCompany from "../whoWeAre/AboutCompany";
import WhyWe from "../whyWe/WhyWe";
import Advantages from "../advantages/Advantages";
import Services from "../services/Services";
import ConnectLine from "../advantages/ConnectLine";
import OurTeam from "../ourTeam/OurTeam";
import Reviews from "../reviews/Reviews";
import ContactUs from "../contactUs/ContactUs";
import Footer from "../footer/Footer";
import MailImage from "../aboutUs/MailImage";
import Navigation from "../navigation/Navigation";
import { MainContainer } from "./mainStyles";
import Portfolio from "../portfolio/Portfolio";
import { useSelector } from "react-redux";

const Main = () => {
  const language = useSelector((state) => state.language);
  const lang = language.name;

  const aboutUsRef = useRef(null);
  const mailImageRef = useRef(null);
  const navRef = useRef(null);
  const [mailImageIsVisible, setMailImageIsVisible] = useState(false);
  const [mailBounce, setMailBounce] = useState(false);

  let lastScrollY = 0;

  setInterval(() => {
    setMailBounce(true);
  }, 20000);

  setInterval(() => {
    setMailBounce(false);
  }, 22100);

  const scrollHandler = () => {
    // NAVIGATION
    if (lastScrollY < window.scrollY) {
      navRef.current?.classList.add("nav--hidden");
    } else {
      navRef.current?.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;

    // MAIL ICON
    if (window.scrollY > aboutUsRef.current?.scrollHeight - 100)
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

  return (
    <MainContainer>
      {mailImageIsVisible && (
        <div
          className={`mail-image ${mailBounce ? "animated" : ""} `}
          ref={mailImageRef}
        >
          <MailImage text={false} lang={lang} />
        </div>
      )}

      <Navigation navRef={navRef} lang={lang} />

      <div className="dark dark--1">
        <div>
          <img
            src={backgroundTriangle1}
            alt="background triangle"
            className="triangle triangle--1"
          />
          <img
            src={backgroundTriangle2}
            alt="background triangle"
            className="triangle triangle--2"
          />
          <img
            src={backgroundTriangle3}
            alt="background triangle"
            className="triangle triangle--3"
          />
        </div>

        <div ref={aboutUsRef}>
          <AboutUs lang={lang} />
        </div>
        <WhoWeAre lang={lang} />
      </div>

      <div className="light light--1">
        <img
          src={backgroundTriangle4}
          className="triangle triangle--4"
          alt="background triangle"
        />
        <AboutCompany lang={lang} />
        <ForWho lang={lang} />
        <WhyWe lang={lang} />
      </div>

      <div className="dark dark--2">
        <div>
          <img
            src={backgroundTriangle5}
            alt="background triangle"
            className="triangle triangle--5"
          />
          <img
            src={backgroundTriangle6}
            alt="background triangle"
            className="triangle triangle--6"
          />
          <img
            src={backgroundTriangle7}
            alt="background triangle"
            className="triangle triangle--7"
          />
          <img
            src={backgroundTriangle8}
            alt="background triangle"
            className="triangle triangle--8"
          />
        </div>

        <Advantages lang={lang} />
        <ConnectLine lang={lang} />
      </div>

      <div className="light">
        <Portfolio lang={lang} />
        <Services lang={lang} />
      </div>

      <div className="dark dark--3">
        <div>
          <img
            src={backgroundTriangle9}
            alt="background triangle"
            className="triangle triangle--9"
          />
          <img
            src={backgroundTriangle9_1}
            alt="background triangle"
            className="triangle triangle--9--1"
          />
          <img
            src={backgroundTriangle10}
            alt="background triangle"
            className="triangle triangle--10"
          />
          <img
            src={backgroundTriangle11}
            alt="background triangle"
            className="triangle triangle--11"
          />
        </div>
        <OurTeam lang={lang} />
      </div>

      <div className="light" style={{ padding: "3rem 0" }}>
        <div>
          <Reviews lang={lang} />
        </div>
      </div>

      <div className="dark dark--4">
        <div>
          <img
            src={backgroundTriangle12}
            alt="background triangle"
            className="triangle triangle--12"
          />
          <img
            src={backgroundTriangle13}
            alt="background triangle"
            className="triangle triangle--13"
          />
        </div>
        <ContactUs lang={lang} />
      </div>

      <Footer lang={lang} />
    </MainContainer>
  );
};

export default Main;
