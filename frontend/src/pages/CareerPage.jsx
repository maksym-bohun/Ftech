import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import SubmitCv from "../components/career/SubmitCv";
import { colors } from "../styles/colors";
import { useSelector } from "react-redux";

const CareerPage = () => {
  const [header, setHeader] = useState(
    <h1>
      We are <span className="italic violet">always looking</span> for talented
      and ambitious professionals who want to advance their careers in an
      innovative environment. We believe in the power of teamwork, creativity,
      and professionalism.{" "}
      <span className="green italic">Send us your resume,</span> and our team of
      recruiters will get in touch with you promptly.
    </h1>
  );
  const lang = useSelector((state) => state.language.name);
  const navRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (lang === "UA") {
      setHeader(
        <h1>
          Ми <span className="italic violet">завжди шукаємо </span>талановитих
          та амбіційних фахівців, які хочуть розвивати свою кар'єру в
          інноваційному середовищі. Ми віримо в силу спільної роботи, творчості
          та професіоналізму.
          <span className="green italic"> відправляй нам своє резюме</span> та
          наша команда рекрутерів невідкладно звʼяжеться з вами
        </h1>
      );
    } else if (lang === "ENG") {
      setHeader(
        <h1>
          We are <span className="italic violet">always looking</span> for
          talented and ambitious professionals who want to advance their careers
          in an innovative environment. We believe in the power of teamwork,
          creativity, and professionalism.{" "}
          <span className="green italic">Send us your resume,</span> and our
          team of recruiters will get in touch with you promptly.
        </h1>
      );
    }
  }, [lang]);

  const scrollHandler = () => {
    if (lastScrollY < window.scrollY) {
      navRef.current?.classList.add("nav--hidden");
    } else {
      navRef.current?.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Container>
      <Navigation lang={lang} navRef={navRef} />
      <div className="career-text centered">{header}</div>
      <SubmitCv lang={lang} />
      <Footer lang={lang} />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${colors.primaryDarkGray};
  .career-text {
    padding-top: 216px;
    padding-bottom: 100px;
    h1 {
      font-size: 36px;
      font-weight: 600;
      line-height: 46.8px;
      text-transform: uppercase;
      margin-right: 7rem;
    }
  }

  footer {
    background-color: #111111;
  }

  @media screen and (max-width: 999px) {
    .career-text {
      width: 90%;
      margin: 0 auto;
      h1 {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 750px) {
    .career-text {
      padding-top: 190px;
      padding-bottom: 70px;
      h1 {
        font-size: 22px;
        font-weight: 600;
        line-height: 28.8px;
      }
    }
  }
`;

export default CareerPage;
