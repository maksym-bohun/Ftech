import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/navigation/Navigation";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import { colors } from "../styles/colors";
import { Link, useLocation } from "react-router-dom";
import backgroundTriangle14 from "../assets/backgroundTriangle14.svg";
import backgroundTriangle15 from "../assets/backgroundTriangle15.svg";

const Greeting = () => {
  const lang = useSelector((state) => state.language.name);
  const location = useLocation();
  const [text, setText] = useState(
    <h1>
      дякуємо, наші <span className="next-line"></span> спеціалісти звʼяжуться з
      вами <span className="italic violet">впродовж 24 годин</span>
    </h1>
  );

  const navRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.state.type === "cv") {
      setText(
        <h1>
          дякуємо, наша <span className="next-line"></span> команда звʼяжеться з
          вами <span className="italic violet">впродовж 24 годин</span>
        </h1>
      );
    } else {
      setText(
        <h1>
          дякуємо, наші <span className="next-line"></span> спеціалісти
          звʼяжуться з вами{" "}
          <span className="italic violet">впродовж 24 годин</span>
        </h1>
      );
    }
  }, [location.state]);

  const scrollHandler = () => {
    // NAVIGATION
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
      <div>
        <img
          src={backgroundTriangle14}
          alt="background Triangle"
          className="triangle triangle--14"
        />
        <img
          src={backgroundTriangle15}
          alt="background Triangle"
          className="triangle triangle--15"
        />
      </div>
      <Navigation lang={lang} navRef={navRef} />
      <div className="text-container centered">
        {text}
        <Link to="/">Повернутись на головну</Link>
      </div>
      <Footer lang={lang} />
    </Container>
  );
};

const Container = styled.main`
  min-height: 100vh;
  position: relative;
  background-color: ${colors.primaryDarkGray};

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    * {
    }

    h1 {
      font-size: 68px;
      font-weight: 900;
      line-height: 81.6px;
      text-transform: uppercase;
      z-index: 10;
      margin-top: 280px;
    }

    .next-line {
      margin-right: 10rem;
    }

    a:link,
    a:visited {
      font-size: 18px;
      font-weight: 800;
      text-decoration: none;
      color: ${colors.primaryDarkGray};
      background-color: ${colors.primaryYellow};
      align-self: center;
      padding: 12px 24px;
      border-radius: 16px;
      text-transform: uppercase;
      margin-bottom: 270px;
      border: 1px solid transparent;
      transition: all 0.3s;
    }

    a:active,
    a:hover {
      background-color: transparent;
      color: ${colors.primaryYellow};
      border-color: ${colors.primaryYellow};
      letter-spacing: 1px;
    }
  }

  nav {
    // background-color: transparent;
  }

  footer {
    background-color: #111111;
    position: relative;
    z-index: 10;
  }

  .triangle {
    position: absolute;
    &--14 {
      right: 0;
    }
    &--15 {
      bottom: 0;
      z-index: 0;
    }
  }

  @media screen and (max-width: 999px) {
    .text-container {
      h1 {
        font-size: 46px;
        font-weight: 900;
        line-height: 61.6px;
        text-transform: uppercase;
        z-index: 10;
        margin-top: 280px;
      }
    }
  }
`;
export default Greeting;
