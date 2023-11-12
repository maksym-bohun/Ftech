import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Cards from "./Cards";

const WhyWe = () => {
  return (
    <Container>
      <div className="centered">
        <h1 className="section-header">Чому обирають нас</h1>
        <div className="heading">
          <span className="violet italic">Ми пишаємося</span> нашим
          професіоналізмом, відданістю та здатністю долати виклики
        </div>
      </div>
      <Cards />
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
    width: 47vw;
    font-size: 36px;
    font-weight: 600;
    line-height: 46.8px;
    letter-spacing: 1.8%;
    margin: 0 auto;
    padding-left: 9rem;
    padding-top: 1rem;
    padding-bottom: 7rem;
  }
`;

export default WhyWe;
