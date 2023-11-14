import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const AboutCompany = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && (
          <>
            <h2>
              У FTech працюють виняткові фахівці, а не пересічні ентузіасти.
              Понад 5 років досвіду довели, що ми є українським технологічним
              лідером, який присвятив себе створенню передових рішень — тих, що
              здатні змінити світ на краще.
            </h2>
            <h1>
              <span className="italic violet"> Ми перетворюємо </span> застарілі
              процедури на сучасні онлайн-сервіси — сприяємо полегшенню
              взаємодії між державою і населенням
            </h1>
          </>
        )}
        {lang === "ENG" && (
          <>
            <h2>
              Exceptional professionals work at FTech, not average enthusiasts.
              More than 5 years of experience have proven that we are a
              Ukrainian technology leader that creates cutting-edge solutions
              that can transform the world in a technological way.
            </h2>
            <h1 className="english">
              <span className="italic violet english">
                {" "}
                We are transforming{" "}
              </span>{" "}
              outdated processes. Crafting cutting-edge online services for
              smoother government and public interaction is what we do best.
            </h1>
          </>
        )}
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

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    h2 {
      width: 440px;
    }

    h1 {
      margin-top: 5rem;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 46px;
      line-height: 60px;
      letter-spacing: 1.8%;
      // margin-right: 1rem;

      &.english {
        font-size: 42px;
      }

      span {
        margin-left: 8rem;

        &.english {
          margin-left: 9rem;
        }
      }
    }
  }
`;

export default AboutCompany;
