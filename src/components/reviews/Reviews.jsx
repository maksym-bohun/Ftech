import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Reviews = ({ lang }) => {
  const [blocks, setBlocks] = useState([]);
  const [listIsFull, setListIsFull] = useState(false);

  useEffect(() => {
    if (lang === "UA")
      setBlocks([
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
      ]);
    else if (lang === "ENG")
      setBlocks([
        {
          header: `Municipal Budgetary Institution "Kyiv City Contact Centre""`,
          text: [
            `Big thanks to FTech for their fantastic teamwork. They got the job done, Contract No. 48, signed on October 21, 2020, involved setting up a call recording system with speech analytics in our software and hardware.`,
            `We're thrilled to say that FTech consistently went above and beyond. They were on time, super reliable, and very responsive. They're like a dependable friend, always there to help us out.`,
          ],
        },
        {
          header: `Municipal Budgetary Institution "Kyiv City Contact Centre""`,
          text: [
            `Big thanks to FTech for their fantastic teamwork. They got the job done, Contract No. 48, signed on October 21, 2020, involved setting up a call recording system with speech analytics in our software and hardware.`,
            `We're thrilled to say that FTech consistently went above and beyond. They were on time, super reliable, and very responsive. They're like a dependable friend, always there to help us out.`,
          ],
        },
        {
          header: `Municipal Budgetary Institution "Kyiv City Contact Centre""`,
          text: [
            `Big thanks to FTech for their fantastic teamwork. They got the job done, Contract No. 48, signed on October 21, 2020, involved setting up a call recording system with speech analytics in our software and hardware.`,
            `We're thrilled to say that FTech consistently went above and beyond. They were on time, super reliable, and very responsive. They're like a dependable friend, always there to help us out.`,
          ],
        },
        {
          header: `Municipal Budgetary Institution "Kyiv City Contact Centre""`,
          text: [
            `Big thanks to FTech for their fantastic teamwork. They got the job done, Contract No. 48, signed on October 21, 2020, involved setting up a call recording system with speech analytics in our software and hardware.`,
            `We're thrilled to say that FTech consistently went above and beyond. They were on time, super reliable, and very responsive. They're like a dependable friend, always there to help us out.`,
          ],
        },
      ]);
  }, [lang]);

  const showMoreAdvantagesHandler = () => {
    setListIsFull(true);
  };

  return (
    <Container className="centered">
      <div className="left">
        {lang === "UA" && <h1 className="section-header ">Відгуки</h1>}
        {lang === "ENG" && <h1 className="section-header ">Rewiews</h1>}
      </div>
      <div className="right">
        <div className="reviews">
          <div
            className={`reviews__container ${listIsFull ? "list-full" : ""}`}
          >
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
          <div className={`overlay ${listIsFull ? "hidden" : ""}`}></div>
        </div>

        <button
          onClick={showMoreAdvantagesHandler}
          className={`show-more ${listIsFull ? "hidden" : ""}`}
        >
          {lang === "UA" && "Показати ще"}
          {lang === "ENG" && "Show more"}
        </button>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;

  .show-more {
    display: none;
  }

  .section-header {
    margin: 0;
    padding: 0;
    position: sticky;
    top: 50px;
    margin-bottom: 80vh;
  }

  .reviews {
    position: relative;

    &__container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .block {
        background-color: #fff;
        padding: 20px 36px;
        padding-right: 50px;
        border-radius: 16px;

        &:nth-child:(1) {
          margin-top: 3rem;
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

    .overlay {
      background: linear-gradient(
        to top,
        ${colors.lightColor},
        transparent 90%
      );
      opacity: 0.75;
      position: absolute;
      height: 15%;
      width: 100%;
      pointer-events: none;
      left: 0;
      bottom: 0;
      display: none;
    }
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: 1fr 4fr;

    .reviews {
      position: relative;

      &__container {
        .block {
          &__header {
            font-size: 20px;
            line-height: 24.8px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    padding-top: 0;
    grid-template-columns: 1fr;
    overflow: hidden;

    .show-more {
      background: ${colors.primaryDarkGray};
      color: ${colors.lightColor};
      display: block;

      &.hidden {
        display: none;
      }
    }

    .section-header {
      position: relative;
      margin: 0;
      padding: 0;
    }
    .left {
      height: 6rem;
    }

    .reviews__container {
      max-height: 29rem;
      overflow-y: hidden;
      &.list-full {
        max-height: 100%;
      }

      .block {
        padding-right: 36px;

        &:last-child {
          margin-bottom: 3rem;
        }

        &__header {
          font-size: 16px;
          line-height: 19.2px;
        }
      }
    }
    .reviews {
      .overlay {
        display: block;

        &.hidden {
          display: none;
        }
      }
    }
  }
`;

export default Reviews;
