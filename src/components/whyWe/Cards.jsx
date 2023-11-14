import React from "react";
import styled from "styled-components";
import ovalIcon from "../../assets/ovalIcon.svg";
import unityIcon from "../../assets/unityIcon.svg";
import speedIcon from "../../assets/speedIcon.svg";
import qualityIcon from "../../assets/qualityIcon.svg";
import { colors } from "../../styles/colors";

const Cards = ({ lang }) => {
  const cards =
    lang === "UA"
      ? [
          {
            icon: ovalIcon,
            header: "Гнучкість",
            text: "Ми завжди адаптуємось до ваших вимог та дедлайнів, які можуть змінюватися.",
          },
          {
            icon: unityIcon,
            header: "Єдність",
            text: `Ми працюємо як один добре налагоджений механізм. Блискавична комунікація всередині команди — наша суперсила.`,
          },
          {
            icon: speedIcon,
            header: "Швидкість",
            text: "Ми розуміємо, що час важливий для вас. Тому забезпечуємо першокласну якість, і, що важливо — вчасно.",
          },
          {
            icon: qualityIcon,
            header: "Якість",
            text: " Ми уважні до деталей. Кожна дрібниця має значення, і ми прагнемо не просто виправдати, а перевершити ваші очікування.",
          },
        ]
      : [
          {
            icon: ovalIcon,
            header: "Flexibility",
            text: "We're all about adapting to your evolving requirements and deadlines. In the tech realm, being flexible is the key to success, and we're always ready to roll with the changes",
          },
          {
            icon: unityIcon,
            header: "Unity",
            text: `We work as one well-oiled machine, working harmoniously towards a common goal. Our superpower? Lightning-fast communication within the team`,
          },
          {
            icon: speedIcon,
            header: "Speed",
            text: "We get that time is precious. We're all about delivering top-notch quality without wasting a single moment",
          },
          {
            icon: qualityIcon,
            header: "Quality",
            text: "We're sticklers for detail. Every little thing matters, and we're on a mission not just to meet but exceed your expectations",
          },
        ];

  return (
    <Container>
      <div className="centered cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card card--${index + 1}`}>
            <div className="image">
              <img src={card.icon} alt="unityIcon" />
            </div>
            <div className="text">
              <h3>{card.header}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
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

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    .card {
      width: 170px;
      padding: 20px;
    }
  }
`;
export default Cards;
