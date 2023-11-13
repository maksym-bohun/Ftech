import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import triangleIconViolet from "../../assets/triangleIconViolet.svg";
import plusIconViolet from "../../assets/plusIconViolet.svg";
import squareIconViolet from "../../assets/squareIconViolet.svg";
import starIconViolet from "../../assets/starIconViolet.svg";
import triangleIconYellow from "../../assets/triangleIconYellow.svg";
import plusIconYellow from "../../assets/plusIconYellow.svg";
import squareIconYellow from "../../assets/squareIconYellow.svg";
import starIconYellow from "../../assets/starIconYellow.svg";

const ForWho = ({ lang }) => {
  const [currentLabel, setCurrentLabel] = useState("state");

  const chooseLabelHandler = (e) => {
    setCurrentLabel(e.target.parentElement.id);
  };

  const containers = {
    state: [
      {
        icon: squareIconViolet,
        content:
          lang === "UA" ? (
            <div>
              Ми надаємо засоби для збору, аналізу, зберігання та <br />
              оптимізації великих обʼємів даних, що допомагають вирішувати
              завдання зручно <br />
              та набагато ефективніше.
            </div>
          ) : (
            <div>
              We offer tools for collecting, analyzing, storing, and optimizing
              extensive data, leading to more convenient and efficient
              problem-solving.
            </div>
          ),
      },
      {
        icon: starIconViolet,
        content:
          lang === "UA" ? (
            <div>
              Наше програмне <br /> забезпечення спрямоване на покращення якості
              обслуговування громадян <br /> а також оптимізацію
              адміністративних процедур.
            </div>
          ) : (
            <div>
              Our software focuses on enhancing customer service quality and
              streamlining administrative procedures
            </div>
          ),
      },
      {
        icon: plusIconViolet,
        content:
          lang === "UA" ? (
            <div>
              Наші рішення забезпечують збереження повної історії взаємодії з
              громадянами, роблять роботу державних органів більш прозорою та
              ефективною.
            </div>
          ) : (
            <div>
              Наші рішення забезпечують збереження повної історії взаємодії з
              громадянами, роблять роботу державних органів більш прозорою та
              ефективною.
            </div>
          ),
      },
      {
        icon: triangleIconViolet,
        content:
          lang === "UA" ? (
            <div>
              Крім того, ми гарантуємо надійний захист <br /> конфіденційної
              інформації, <br />
              щоб забезпечити безпеку <br /> даних громадян.
            </div>
          ) : (
            <div>
              Крім того, ми гарантуємо надійний захист <br /> конфіденційної
              інформації, <br />
              щоб забезпечити безпеку <br /> даних громадян.
            </div>
          ),
      },
    ],
    business: [
      {
        icon: squareIconYellow,
        content:
          lang === "UA" ? (
            <div>
              FTech пропонує рішення, які сприяють оптимізації бізнес-процесів
              та підвищенню продуктивності
            </div>
          ) : (
            <div>
              FTech delivers solutions that empower businesses to streamline
              workflows and boost productivity.
            </div>
          ),
      },
      {
        icon: starIconYellow,
        content:
          lang === "UA" ? (
            <div>
              Наше програмне
              <br /> забезпечення надає повний контроль над взаємодією з
              клієнтами і допомагає створювати індивідуальні підходи до кожного
              клієнта
            </div>
          ) : (
            <div>
              Our software ensures complete control over customer interactions,
              fostering personalized approaches for each client.
            </div>
          ),
      },
      {
        icon: plusIconYellow,
        content:
          lang === "UA" ? (
            <div>
              Ми розуміємо важливість ефективного управління взаємодією з
              клієнтами та розвитку продажів
            </div>
          ) : (
            <div>
              Recognizing the significance of effective customer relationship
              management and sales development, we designed our tools to help
              you attain these goals, fortifying your competitive position in
              the market.
            </div>
          ),
      },
      {
        icon: triangleIconYellow,
        content:
          lang === "UA" ? (
            <div>
              Наші інструменти допоможуть вам досягти цих цілей і <br />{" "}
              зміцнити вашу конкурентну позицію на ринку.
            </div>
          ) : (
            <div>
              Наші інструменти допоможуть вам досягти цих цілей і зміцнити вашу
              конкурентну позицію на ринку.
            </div>
          ),
      },
    ],
  };

  return (
    <Container>
      <div className="centered">
        {lang === "UA" && <h1 className="section-header">Для кого</h1>}
        {lang === "ENG" && <h1 className="section-header">Who is it for</h1>}

        <div className="labels">
          <div
            id="state"
            className={`label ${currentLabel === "state" ? "active" : ""}`}
          >
            {lang === "UA" && (
              <span onClick={chooseLabelHandler}>Для державних установ</span>
            )}
            {lang === "ENG" && (
              <span onClick={chooseLabelHandler}>For Government</span>
            )}
          </div>
          <div
            id="business"
            className={`label ${currentLabel === "business" ? "active" : ""}`}
          >
            {lang === "UA" && (
              <span onClick={chooseLabelHandler}>Для бізнесу</span>
            )}
            {lang === "ENG" && (
              <span onClick={chooseLabelHandler}>for Business</span>
            )}
          </div>
          <div className="rectangle"></div>
        </div>
        <div className={`containers containers--${currentLabel}`}>
          {containers[currentLabel].map((container) => (
            <div key={container.icon} className="container">
              <img src={container.icon} />
              <div>{container.content}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  color: ${colors.primaryDarkGray};
  padding-bottom: 8rem;
  h1 {
    margin-bottom: 4rem;
  }

  .labels {
    display: grid;
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    // padding-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.primaryDarkGray};

    .label {
      text-transform: uppercase;
      font-size: 1.5rem;

      span {
        padding-left: 0.6rem;
        cursor: pointer;
      }
      &.active {
        font-weight: 700;
      }
    }
  }

  .rectangle {
    width: 100%;
    height: 5px;
    background-color: #000;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    transition: all 0.3s;
  }

  #state.active ~ .rectangle {
    transform: translateX(0);
  }

  #business.active ~ .rectangle {
    transform: translateX(calc(100% + 3rem));
  }

  .containers {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1.4rem;
    position: relative;

    .container {
      background-color: ${colors.primaryDarkGray};
      padding: 16px 8px;
      width: 21%;
      height: 230px;
      font-size: 16px;
      line-height: 20.8px;
      letter-spacing: 1.9%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 16px;
      color: ${colors.lightColor};
      transition: all 0.3s;

      img {
        justify-self: start;
        align-self: start;
        height: 34px;
        width: 34px;
      }
    }

    &--business::after,
    &--state::before {
      content: " ";
      position: absolute;
      // top: 20%;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      filter: blur(65px);
      z-index: 3;
      border-radius: 50%;
    }

    &--state::before {
      background-color: ${colors.primaryViolet};
      left: -13vw;
    }

    &--business::after {
      background-color: ${colors.primaryYellow};
      right: -13vw;
    }
  }

  @media screen and (min-width: 1800px) {
    .containers--state::before {
    }

    &--business::after {
      box-shadow: 0px 0px 500px 70px #ffde03;
    }
  }
`;

export default ForWho;
