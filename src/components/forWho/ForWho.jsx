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
              Сприяємо налагодженню взаємодії між урядом та громадянами. Ми
              оптимізуємо адміністративні процедури, де кожен крок — чіткий та
              зрозумілий.
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
              Наше програмне забезпечення спрощує більшість адміністративних
              процедур — це повна трансформація ведення збору, аналізу та
              зберігання великих обсягів даних.
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
              Ми пропонуємо рішення, <span className="next-line"></span> що
              систематизують адміністративні завдання,{" "}
              <span className="next-line"></span> і при цьому приділяємо
              особливу увагу безпеці даних.
            </div>
          ) : (
            <div>
              We offer solutions that streamline administrative tasks while
              placing a strong emphasis on data security
            </div>
          ),
      },
      {
        icon: triangleIconViolet,
        content:
          lang === "UA" ? (
            <div>
              Ми надаємо засоби для збору, аналізу, та оптимізації великих
              обʼємів даних. Наше програмне забезпечення налагоджує
              індивідуальний підхід до кожного клієнта.
            </div>
          ) : (
            <div>
              We provide tools for collecting, analyzing, and optimizing large
              volumes of data. Our software tailors an individual approach to
              each client
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
              We foster interaction between the government and citizens. By
              optimising administrative procedures, we make every step of
              communication clear and understandable.
            </div>
          ),
      },
      {
        icon: starIconYellow,
        content:
          lang === "UA" ? (
            <div>
              Наше програмне забезпечення надає повний контроль над взаємодією з
              клієнтами і допомагає створювати індивідуальні підходи до кожного
              клієнта
            </div>
          ) : (
            <div>
              Our software simplifies most administrative tasks - it is a
              complete transformation of collecting, analysing and storing large
              amounts of data.
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
              We know that effective customer relationship management and sales
              development are crucial, so we tailored our tools to assist you in
              reaching these goals and boosting your competitive edge in the
              market.
            </div>
          ),
      },
      {
        icon: triangleIconYellow,
        content:
          lang === "UA" ? (
            <div>
              Наші інструменти допоможуть вам досягти цих цілей і зміцнити вашу
              конкурентну позицію на ринку.
            </div>
          ) : (
            <div>
              We deliver solutions that streamline administrative tasks and
              maintain data security. Our software ensures complete control over
              customer interactions, fostering personalized approaches for each
              client.
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
              <span onClick={chooseLabelHandler} className="english">
                For Government
              </span>
            )}
          </div>
          <div
            id="business"
            className={`label ${currentLabel === "business" ? "active" : ""}`}
          >
            {lang === "UA" && (
              <span onClick={chooseLabelHandler}>
                Для<span className="next-line--sm"></span> бізнесу
              </span>
            )}
            {lang === "ENG" && (
              <span onClick={chooseLabelHandler}>
                for <span className="next-line--sm english"></span> Business
              </span>
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

  .next-line {
    margin-right: 2rem;
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
      width: 20.8%;
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
      z-index: -1;
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

  @media screen and (max-width: 1400px) {
    .containers {
      .container {
        height: 270px;
        width: 22%;
      }
    }
  }

  @media screen and (max-width: 999px) {
    padding-bottom: 4rem;

    .labels {
      grid-column-gap: 3rem;
      border-bottom: 1px solid ${colors.primaryDarkGray};
      .label {
        text-transform: uppercase;
        font-size: 1.5rem;

        span {
          padding: 0rem;
          cursor: pointer;
        }

        .next-line--sm {
          margin-right: 15rem;

          &.english {
            margin: 0;
          }
        }

        &.active {
          font-weight: 700;
        }
      }
    }
    .containers {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 2rem;

      .container {
        width: 95%;
      }
    }
  }

  @media screen and (max-width: 760px) {
    padding-bottom: 4rem;
    .next-line {
      margin-right: 0;
    }

    .labels {
      grid-column-gap: 1rem;
      margin: 0 auto;
      // width: 95%;

      .next-line--sm {
        margin-right: 2rem;
      }

      .label {
        font-size: 1rem;
        max-width: 10rem;

        span {
          padding-left: 0rem;

          &.english {
            padding-right: 5rem;
          }
        }
      }

      #business.active ~ .rectangle {
        transform: translateX(calc(100% + 1rem));
      }
    }

    .containers {
      width: 100%;
      flex-direction: column;
      gap: 1rem;

      .container {
        margin: 0 auto;
        width: 95%;
        height: 160px;
      }
    }
  }

  @media screen and (max-width: 390px) {
    padding-bottom: 2rem;
    .labels .label {
      font-size: 14px;
    }
  }
`;

export default ForWho;
