import React from "react";
import styled from "styled-components";
import ovalIcon from "../../assets/ovalIcon.svg";
import unityIcon from "../../assets/unityIcon.svg";
import speedIcon from "../../assets/speedIcon.svg";
import qualityIcon from "../../assets/qualityIcon.svg";
import { colors } from "../../styles/colors";

const Cards = () => {
  return (
    <Container>
      <div className="centered cards-container">
        <div className="card card--1">
          <div className="image">
            <img src={ovalIcon} alt="ovalIcon" />
          </div>
          <div className="text">
            <h3>Гнучкість</h3>
            <p>
              Ми завжди адаптуємось до ваших вимог та дедлайнів, які можуть
              змінюватися.
            </p>
          </div>
        </div>
        <div className="card card--2">
          <div className="image">
            <img src={unityIcon} alt="unityIcon" />
          </div>
          <div className="text">
            <h3>Єдність</h3>
            <p>
              Ми працюємо як один добре налагоджений механізм. Блискавична
              комунікація всередині команди — наша суперсила.
            </p>
          </div>
        </div>
        <div className="card card--3">
          <div className="image">
            <img src={speedIcon} alt="speedIcon" />
          </div>
          <div className="text">
            <h3>Швидкість</h3>
            <p>
              Ми розуміємо, що час важливий для вас. Тому забезпечуємо
              першокласну якість, і, що важливо — вчасно.
            </p>
          </div>
        </div>
        <div className="card card--4">
          <div className="image">
            <img src={qualityIcon} alt="qualityIcon" />
          </div>
          <div className="text">
            <h3>Якість</h3>
            <p>
              Ми уважні до деталей. Кожна дрібниця має значення, і ми прагнемо
              не просто виправдати, а перевершити ваші очікування.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .cards-container {
    display: flex;
    justify-content: space-between;
  }

  .card {
    width: 20%;
    display: grid;
    grid-template-rows: 1fr 2fr;
    padding: 16px;
    border-radius: 16px;
    transition: all 0.5s;
    gap: 3rem;

    .image {
      img {
        height: 54px;
      }
    }

    .text {
      color: ${colors.primaryDarkGray};
      justify-self: start;

      h3 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 25px;
        margin: 0;
        padding: 0;
      }

      p {
        margin-top: 0.5rem;
        font-size: 16px;
        font-weight: 400;
        line-height: 20.8px;
        letter-spacing: 1.8%;
      }
    }

    &--1 {
      background-color: ${colors.primaryYellow};
    }

    &--2 {
      background-color: ${colors.primaryViolet};
    }

    &--3 {
      background-color: ${colors.primaryGreen};
    }

    &--4 {
      background-color: ${colors.primaryOrange};
    }

    &:hover {
      transform: translateY(-5%);
    }
  }
`;
export default Cards;
