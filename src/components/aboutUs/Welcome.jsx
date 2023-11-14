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
          <MailImage lang={lang} />
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

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
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
`;

export default Welcome;
