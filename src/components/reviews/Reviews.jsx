import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Reviews = () => {
  const list = useRef();
  const [overlayOpacity, setOverlayOpacity] = useState(1);
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

  const scrollHandler = (e) => {
    if (
      list.current.scrollHeight -
        list.current.scrollTop -
        list.current.offsetHeight <=
      10
    ) {
      setOverlayOpacity(0);
    } else {
      setOverlayOpacity(0.75);
    }
  };

  return (
    <Container>
      <div className="centered reviews">
        <h1 className="section-header">Відгуки</h1>
        <div className="list-container">
          <div className="reviews__list" onScroll={scrollHandler}>
            <div className="overlay" style={{ opacity: overlayOpacity }}></div>
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
  padding-bottom: 5rem;
  .reviews {
    padding-top: 7rem;
    display: flex;

    h1 {
      width: 26%;
      margin: 0;
      padding: 0;
    }

    .list-container {
      width: 74%;
      position: relative;
    }

    .reviews__list {
      max-height: 40rem;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .overlay {
        background: linear-gradient(
          to top,
          ${colors.lightColor},
          transparent 90%
        );
        opacity: 0.75;
        position: absolute;
        bottom: 0;
        height: 15%;
        pointer-events: none;
        right: 0;
        left: 0;
        // box-shadow: 0px 10px -5px 50px ${colors.lightColor};
      }

      .block {
        background-color: #fff;
        padding: 20px 36px;
        padding-right: 50px;
        border-radius: 16px;

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

export default Reviews;
