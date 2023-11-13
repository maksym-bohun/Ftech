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
    padding-left: 9rem;
    padding-top: 1rem;
    padding-bottom: 7rem;
  }

  @media screen and (min-width: 1800px) {
    .heading {
      width: 35vw;
      padding-left: 4rem;
    }
  }
`;

export default WhyWe;
