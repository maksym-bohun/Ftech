import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Reviews1 = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [headerFixedToBottom, setHeaderFixedToBottom] = useState(false);

  const reviewsPageRef = useRef(null);
  const headerRef = useRef(null);
  const blocks = [
    {
      header: `Комунальна бюджетна установа "Контактний центр міста Києва"`,
      text: [
        `Велика подяка FTech за їх фантастичну командну роботу. Команда повністю виконала свою роботу, контракт № 48, підписаний 21 жовтня 2020 року, передбачав встановлення системи запису дзвінків з аналітикою мовлення в нашому програмному та апаратному забезпеченні.`,
        `Ми були приємно вражені, що FTech перевершували наші очікування. Команда встигала вчасно, була надзвичайно надійною та дуже оперативною. А ще, вони завжди відповідали на поставленні запитання. Результатом ми залишилися задоволені.`,
      ],
    },
    {
      header: `Комунальна бюджетна установа "Контактний центр міста Києва"`,
      text: [
        `Велика подяка FTech за їх фантастичну командну роботу. Команда повністю виконала свою роботу, контракт № 48, підписаний 21 жовтня 2020 року, передбачав встановлення системи запису дзвінків з аналітикою мовлення в нашому програмному та апаратному забезпеченні.`,
        `Ми були приємно вражені, що FTech перевершували наші очікування. Команда встигала вчасно, була надзвичайно надійною та дуже оперативною. А ще, вони завжди відповідали на поставленні запитання. Результатом ми залишилися задоволені.`,
      ],
    },
    {
      header: `Комунальна бюджетна установа "Контактний центр міста Києва"`,
      text: [
        `Велика подяка FTech за їх фантастичну командну роботу. Команда повністю виконала свою роботу, контракт № 48, підписаний 21 жовтня 2020 року, передбачав встановлення системи запису дзвінків з аналітикою мовлення в нашому програмному та апаратному забезпеченні.`,
        `Ми були приємно вражені, що FTech перевершували наші очікування. Команда встигала вчасно, була надзвичайно надійною та дуже оперативною. А ще, вони завжди відповідали на поставленні запитання. Результатом ми залишилися задоволені.`,
      ],
    },
    {
      header: `Комунальна бюджетна установа "Контактний центр міста Києва"`,
      text: [
        `Велика подяка FTech за їх фантастичну командну роботу. Команда повністю виконала свою роботу, контракт № 48, підписаний 21 жовтня 2020 року, передбачав встановлення системи запису дзвінків з аналітикою мовлення в нашому програмному та апаратному забезпеченні.`,
        `Ми були приємно вражені, що FTech перевершували наші очікування. Команда встигала вчасно, була надзвичайно надійною та дуже оперативною. А ще, вони завжди відповідали на поставленні запитання. Результатом ми залишилися задоволені.`,
      ],
    },
  ];

  return (
    <Container ref={reviewsPageRef} className="centered">
      <div className="sticky">
        <h1 className="section-header ">Відгуки</h1>
      </div>
      <div className="reviews">
        <div>&nbsp;</div>
        <div className="list-container">
          <div className="reviews__list">
            <div className="overlay overlay--2"></div>
            {blocks.map((block, index) => (
              <div key={index} className="block">
                <h2 className="block__header">{block.header}</h2>
                <div className="block__text">
                  {block.text.map((text, index) => {
                    return <p key={index}>{text}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 1rem auto;

  .reviews {
    padding-top: 7rem;
    display: flex;

    > div:first-child {
      margin: 0;
      padding: 0;
      width: 26%;

      > div {
        position: absolute;
      }
    }

    .list-container {
      width: 74%;
    }

    .reviews__list {
      position: relative;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      margin-top: -3rem;
      gap: 1rem;
      //   margin-left: 15vh;
      //   margin-right: -15vh;

      .overlay {
        background: linear-gradient(
          to top,
          ${colors.lightColor},
          transparent 90%
        );
        opacity: 0.75;
        position: absolute;
        height: 15%;
        pointer-events: none;
        right: 0;
        left: 0;
        &--1 {
          top: 0;
        }
        &--2 {
          bottom: 0;
        }

        // box-shadow: 0px 10px -5px 50px ${colors.lightColor};
      }

      .block {
        background-color: #fff;
        padding: 20px 36px;
        padding-right: 50px;
        border-radius: 16px;

        &:nth-child:(1) {
          margin-top: 3rem;
          color: red;
        }

        &:last-child {
          margin-bottom: 3rem;
        }

        &__header {
          padding: 0;
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          line-height: 28.8px;
          letter-spacing: 1.8%;
          text-transform: uppercase;
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
          line-height: 20.8px;
          letter-spacing: 1.8%;
          p {
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
`;

export default Reviews1;
