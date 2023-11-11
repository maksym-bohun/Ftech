import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import backgroundTriangle4 from "../../assets/backgroundTriangle4.svg";

const AboutCompany = () => {
  return (
    <Container>
      <div className="centered">
        <h2>
          Українська технологічна компанія, що активно працює на ринку більше 5
          років і  зосереджена на створенні і впровадженні інноваційних
          продуктів для автоматизації процесів та цифрового перетворення держави
          та бізнеса
        </h2>
        <h1>
          <span className="italic violet">Ми перетворюємо</span> застарілі
          рутинні процедури на сучасні онлайн-сервіси та сприяємо покращенню
          взаємодії між державою <br /> і населенням
        </h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  //   padding-bottom: 3rem;
  color: ${colors.primaryDarkGray};
  position: relative;

  h2 {
    font-size: 1rem;
    width: 456px;
    font-weight: 500;
    padding-top: 120px;
    margin: 0;
  }

  h1 {
    margin-top: 8rem;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 46px;
    line-height: 60px;
    letter-spacing: 1.8%;

    span {
      margin-left: 18rem;
    }
  }
`;

export default AboutCompany;
