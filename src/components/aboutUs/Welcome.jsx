import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mailIcon from "../../assets/mailIcon.svg";
import MailImage from "./MailImage";

import { colors } from "../../styles/colors";

const Welcome = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" ? (
          <h1 className="header">
            Цифрове <span className="italic violet">вдосконалення</span> держави
            і бізнесу
          </h1>
        ) : (
          <h1 className="header english">
            Digital <span className="violet">improvement</span>{" "}
            <span className="next-line"></span> of state and business
          </h1>
        )}

        <div className="text">
          {lang === "UA" ? (
            <p>
              Розробка та впровадження галузевих IT рішень з метою цифровізації
              та модернізації корпоративного ринку, державних і громадських
              структур
            </p>
          ) : (
            <p>
              Developing and implementing industry-specific IT solutions for
              digitalizing and modernizing the corporate market, government, and
              public institutions.
            </p>
          )}
          <MailImage lang={lang} className="mail-image--main" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .next-line {
    margin-right: 15rem;
  }

  .header {
    text-transform: uppercase;
    font-weight: 900;
    line-height: 81.6px;
    font-size: 68px;
  }

  .text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    // position: relative;
    line-height: 31.2px;
    margin-left: 18rem;

    p {
      width: 544px;
      color: ${colors.lightColor};
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 1400px) {
    .header {
      line-height: 55.2px;
      font-size: 46px;

      &.english {
        margin-right: 5rem;
      }
    }

    .text {
      margin-left: 8rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .text {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      line-height: 31.2px;
      margin-left: 0;

      p {
        grid-column: 2/4;
        width: 545px;
        font-size: 24px;
        line-height: 31.2px;
      }

      .mail-image--main {
        grid-column: 3/4;
        padding-left: 2rem;
        margin-left: 5rem;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .header {
      line-height: 38.4px;
      font-size: 32px;
    }

    .text {
      p {
        grid-column: 3/4;
        width: 290px;
        color: ${colors.lightColor};
        font-size: 16px;
        line-height: 20.8px;
        text-transform: uppercase;
      }

      .mail-image--main {
        grid-row: 2;
        grid-column: 3;
        transform: scale(80%);
        padding-left: 2rem;
        margin-top: -1rem;
      }
    }
  }
`;

export default Welcome;
