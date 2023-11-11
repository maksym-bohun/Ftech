import React from "react";
import styled from "styled-components";
import Services from "./Services";

const WhoWeAre = () => {
  return (
    <Container>
      <h1 className="section-header">Хто ми?</h1>
      <div className="description">
        FTech first technologies –{" "}
        <span className="green">Ваш надійний партнер</span> у світі розробки
        програмного забезпечення та CRM-систем.{" "}
        <span className="italic violet">Ми надаємо</span> бізнес-орієнтовані веб
        та мобільні додатки з комплексним впровадженням, підтримкою та
        рекомендаціями наших експертів, і це є джерелом нашої гордості.
      </div>
      <Services />
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: 0;

  .section-header,
  .description {
    width: 1220px;
    margin: 0 auto;
  }
  .description {
    font-size: 36px;
    font-weight: 600;
    line-height: 46.8px;
    text-transform: uppercase;
    width: 1065px;
  }
`;

export default WhoWeAre;
