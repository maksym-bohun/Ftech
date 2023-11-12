import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import backgroundTriangle4 from "../../assets/backgroundTriangle4.svg";

const AboutCompany = () => {
  return (
    <Container>
      <div className="centered">
        <h2>
          У FTech працюють виняткові фахівці, а не пересічні ентузіасти. Понад 5
          років досвіду довели, що ми є українським технологічним лідером, який
          присвятив себе створенню передових рішень — тих, що здатні змінити
          світ на краще.
        </h2>
        <h1>
          <span className="italic violet"> Ми перетворюємо </span> застарілі
          процедури на сучасні онлайн-сервіси — сприяємо полегшенню взаємодії
          між державою і населенням
        </h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding-bottom: 5rem;
  color: ${colors.primaryDarkGray};
  position: relative;

  h2 {
    font-size: 1rem;
    width: 420px;
    font-weight: 400;
    padding-top: 120px;
    line-height: 20.8px;
    letter-spacing: 1.8%;
    margin: 0;
  }

  h1 {
    margin-top: 5rem;
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
