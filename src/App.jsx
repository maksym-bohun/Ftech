import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import Header from "./components/navigation/Navigation";
import { colors } from "./styles/colors";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import backgroundTriangle1 from "./assets/backgroundTriangle1.svg";
import backgroundTriangle2 from "./assets/backgroundTriangle2.svg";
import backgroundTriangle3 from "./assets/backgroundTriangle3.svg";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import ForWho from "./components/forWho/ForWho";
import AboutCompany from "./components/whoWeAre/AboutCompany";
import WhyWe from "./components/whyWe/WhyWe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div className="introduction">
        <img
          src={backgroundTriangle1}
          alt=""
          className="triangle triangle--1"
        />
        <img
          src={backgroundTriangle2}
          alt=""
          className="triangle triangle--2"
        />
        <img
          src={backgroundTriangle3}
          alt=""
          className="triangle triangle--3"
        />
        <Header />
        <AboutUs />
      </div>
      <WhoWeAre />
      <div className="light">
        <AboutCompany />
        <ForWho />
        <WhyWe />
      </div>
      {/* <Services />
      <Portfolio />
      <Faq /> */}
    </Container>
  );
}

const Container = styled.main`
  font-family: "Nunito Sans", sans-serif;
  .introduction {
    position: relative;
    .triangle {
      position: absolute;
      z-index: -1;

      &--2 {
        top: 27rem;
      }
      &--3 {
        right: 0;
        top: 10rem;
      }
    }
  }

  .light {
    background-color: ${colors.lightColor};
  }
`;

export default App;
