import React from "react";
import styled from "styled-components";
import officeImage from "../../assets/office.svg";
import officeImageMobile from "../../assets/officeMobile.svg";

const OurTeam = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && <div className="section-header">Наша команда</div>}
        {lang === "ENG" && <div className="section-header">Our team </div>}

        <div className={`content ${lang === "ENG" && "content--english"}`}>
          <img src={officeImage} alt="our office" />
          <img
            src={officeImageMobile}
            alt="our office"
            className="image--mobile"
          />
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
  .image--mobile {
    display: none;
  }
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

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    .content {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 4rem;
    max-height: 34rem;

    .content {
      img {
        display: none;
      }
      .image--mobile {
        display: block;
      }

      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      .text {
        font-size: 16px;
        line-height: 20.8px;
        letter-spacing: 1.8%;
        margin-right: 0;
        margin-top: 2rem;

        &--english {
          margin-right: 0;
        }
      }

      .next-line {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .content {
      img {
        display: none;
      }
      .image--mobile {
        display: block;
        width: 320px;
        height: 175px;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
`;

export default OurTeam;
