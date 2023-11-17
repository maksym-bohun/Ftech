import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Cards from "./Cards";

const WhyWe = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && <h1 className="section-header">Чому обирають нас</h1>}
        {lang === "ENG" && (
          <h1 className="section-header">Our winning approach</h1>
        )}

        {lang === "ENG" && (
          <div className="heading">
            <span className="violet italic">We are proud</span> of our team's
            professionalism, dedication, and resilience.
          </div>
        )}
        {lang === "UA" && (
          <div className="heading">
            <span className="violet italic">Ми пишаємося</span> нашим
            професіоналізмом, відданістю та здатністю долати виклики
          </div>
        )}
      </div>
      <Cards lang={lang} />
    </Container>
  );
};

const Container = styled.section`
  padding-bottom: 10rem;
  h1 {
    color: ${colors.primaryDarkGray};
  }

  .heading {
    text-transform: uppercase;
    color: ${colors.primaryDarkGray};
    font-size: 36px;
    font-weight: 600;
    line-height: 46.8px;
    letter-spacing: 1.8%;
    margin: 0 auto;
    padding-left: 10rem;
    width: 670px;
    padding-top: 1rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 1800px) {
    .heading {
      width: 35vw;
      padding-left: 4rem;
    }
  }

  @media screen and (max-width: 1400px) {
    .heading {
      margin-right: 5rem;
    }
  }

  @media screen and (max-width: 999px) {
    .heading {
      margin: 0;
      padding: 0;
      margin-bottom: 5rem;

      width: 100%;
    }
  }

  @media screen and (max-width: 760px) {
    .heading {
      font-size: 24px;
      font-weight: 400;
      line-height: 31.2px;
      padding-left: 0;
      padding-bottom: 2rem;
    }
  }

  @media screen and (max-width: 390px) {
    .heading {
      font-size: 18px;
      line-height: 23.4px;
      margin-right: 2rem;
    }
  }
`;

export default WhyWe;
