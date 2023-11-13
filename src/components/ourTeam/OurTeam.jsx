import React from "react";
import styled from "styled-components";
import officeImage from "../../assets/office.svg";

const OurTeam = () => {
  return (
    <Container>
      <div className="centered">
        <div className="section-header">Наша команда</div>
        <div className="content">
          <img src={officeImage} alt="our office" />
          <h2 className="text">
            українська технологічна компанія, що активно працює{" "}
            <span className="violet"> більше 5 років на ринку</span> і
            зосереджена
            <span className="next-line"></span> на створенні і впровадженні
            інноваційних продуктів <span className="next-line"></span>
            для підтримки{" "}
            <span className="green italic">
              цифрового перетворення держави <span className="next-line"></span>{" "}
              та бізнесу.
            </span>
          </h2>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding-bottom: 9rem;

  .content {
    padding-top: 2.6rem;
    display: flex;
    gap: 12rem;
    align-items: center;

    .text {
      font-size: 36px;
      font-weight: 400;
      line-height: 46.8px;
      letter-spacing: 1.8%;
      text-transform: uppercase;
      margin-right: 2rem;
    }

    .next-line {
      margin-right: 8rem;
    }
  }

  @media screen and (min-width: 1800px) {
    padding-bottom: 7rem;
  }
`;

export default OurTeam;
