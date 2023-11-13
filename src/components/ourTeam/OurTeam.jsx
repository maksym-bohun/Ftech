import React from "react";
import styled from "styled-components";
import officeImage from "../../assets/office.svg";

const OurTeam = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && <div className="section-header">Наша команда</div>}
        {lang === "ENG" && <div className="section-header">Our team </div>}

        <div className={`content ${lang === "ENG" && "content--english"}`}>
          <img src={officeImage} alt="our office" />
          {lang === "UA" && (
            <h2 className="text">
              українська технологічна компанія, що активно працює{" "}
              <span className="violet"> більше 5 років на ринку</span> і
              зосереджена
              <span className="next-line"></span> на створенні і впровадженні
              інноваційних продуктів <span className="next-line"></span>
              для підтримки{" "}
              <span className="green italic">
                цифрового перетворення держави{" "}
                <span className="next-line"></span> та бізнесу.
              </span>
            </h2>
          )}
          {lang === "ENG" && (
            <h2 className="text text--english">
              We are a Ukrainian tech company with
              <span className="violet"> over 5 years of experience</span>{" "}
              specializing in creating innovative products for process
              automation and complete{" "}
              <span className="green italic">
                digital transformation of government and business.
              </span>
            </h2>
          )}
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

    &--english {
      gap: 8rem;
    }

    .text {
      font-size: 36px;
      font-weight: 400;
      line-height: 46.8px;
      letter-spacing: 1.8%;
      text-transform: uppercase;
      margin-right: 2rem;

      &--english {
        margin-right: 0;
      }
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
