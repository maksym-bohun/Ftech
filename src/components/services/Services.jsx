import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Accordion from "./Accordion";

const Services = () => {
  return (
    <Container>
      <h2>Послуги</h2>

      <h1>
        МИ ДАЄМО БІЛЬШЕ, НІЖ ВИ ОЧІКУЄТЕ, БО ШУКАЄМО РІШЕННЯ, ЯКЕ{" "}
        <span>ПРАЦЮЄ НА 100%</span>
      </h1>
      <Accordion />
    </Container>
  );
};

const Container = styled.section`
  margin: 5rem 0 10rem 0;
  width: 100%;

  h2 {
    color: ${colors.primaryBlue};
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  h1 {
    color: #000;
    width: 90%;
    font-size: 2.6rem;
    line-height: 3.2rem;

    span {
      color: ${colors.primaryBlue};
    }
  }
`;

export default Services;
