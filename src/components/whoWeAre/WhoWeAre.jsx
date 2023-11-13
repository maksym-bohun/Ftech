import React from "react";
import styled from "styled-components";
import Services from "./Services";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="centered">
        <h1 className="section-header">Хто ми?</h1>
        <div className="description">
          FTech first technologies –{" "}
          <span className="green">Ваш вірний союзник</span> у розробці
          програмного забезпечення та CRM-систем.{" "}
          <span className="italic violet">Ми створюємо</span> бізнес-орієнтовані
          <span className="next-line"></span> веб- та мобільні додатки і
          пропонуємо їх бездоганне впровадження, експертну підтримку та
          індивідуальні рекомендації.
        </div>
      </div>
      <Services />
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  .description {
    padding-top: 1rem;
    font-size: 36px;
    font-weight: 600;
    line-height: 46.8px;
    letter-spacing: 1.8%;
    text-transform: uppercase;
    margin-right: 7rem;
  }

  .next-line {
    margin-right: 4rem;
  }

  @media screen and (min-width: 1800px) {
    padding-bottom: 1.2rem;
    gap: 6rem;

    .description {
      margin-right: 17rem;
    }
  }
`;

export default WhoWeAre;
