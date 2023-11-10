import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Portfolio = () => {
  const items = [
    <div className="card">
      <div className="card__side card__side--front"></div>
      <div className="card__side card__side--back">
        <div className="content">
          <h3>ТИПУ ХОВЕР</h3>
          <p>
            А тут текст ще про опис шо ми їбать ведемо провект от і до кароче
            можна ще по пунктах шось перечисліть в стілі:
          </p>
          <ul>
            <li>пункт 1 тут ще буков трекба</li>
            <li>пункт 2 букви</li>
            <li>пункт 3 шось там я хз</li>
            <li>пункт 4 бла блабла</li>
          </ul>
          <p>
            тут шото ще текст я хз шо писать бла бла бла бла треба більше інфи і
            копірайтер якийсь я хз блабалбла пес патро байрактар
          </p>
          <button>Дивитись</button>
        </div>
      </div>
    </div>,

    <div className="card">
      <div className="card__side card__side--front"></div>
      <div className="card__side card__side--back">
        <div className="content">
          <h3>ТИПУ ХОВЕР</h3>
          <p>
            А тут текст ще про опис шо ми їбать ведемо провект от і до кароче
            можна ще по пунктах шось перечисліть в стілі:
          </p>
          <ul>
            <li>пункт 1 тут ще буков трекба</li>
            <li>пункт 2 букви</li>
            <li>пункт 3 шось там я хз</li>
            <li>пункт 4 бла блабла</li>
          </ul>
          <p>
            тут шото ще текст я хз шо писать бла бла бла бла треба більше інфи і
            копірайтер якийсь я хз блабалбла пес патро байрактар
          </p>
          <button>Дивитись</button>
        </div>
      </div>
    </div>,

    <div className="card">
      <div className="card__side card__side--front"></div>
      <div className="card__side card__side--back">
        <div className="content">
          <h3>ТИПУ ХОВЕР</h3>
          <p>
            А тут текст ще про опис шо ми їбать ведемо провект от і до кароче
            можна ще по пунктах шось перечисліть в стілі:
          </p>
          <ul>
            <li>пункт 1 тут ще буков трекба</li>
            <li>пункт 2 букви</li>
            <li>пункт 3 шось там я хз</li>
            <li>пункт 4 бла блабла</li>
          </ul>
          <p>
            тут шото ще текст я хз шо писать бла бла бла бла треба більше інфи і
            копірайтер якийсь я хз блабалбла пес патро байрактар
          </p>
          <button>Дивитись</button>
        </div>
      </div>
    </div>,

    <div className="card">
      <div className="card__side card__side--front"></div>
      <div className="card__side card__side--back">
        <div className="content">
          <h3>ТИПУ ХОВЕР</h3>
          <p>
            А тут текст ще про опис шо ми їбать ведемо провект от і до кароче
            можна ще по пунктах шось перечисліть в стілі:
          </p>
          <ul>
            <li>пункт 1 тут ще буков трекба</li>
            <li>пункт 2 букви</li>
            <li>пункт 3 шось там я хз</li>
            <li>пункт 4 бла блабла</li>
          </ul>
          <p>
            тут шото ще текст я хз шо писать бла бла бла бла треба більше інфи і
            копірайтер якийсь я хз блабалбла пес патро байрактар
          </p>
          <button>Дивитись</button>
        </div>
      </div>
    </div>,

    <div className="card">
      <div className="card__side card__side--front"></div>
      <div className="card__side card__side--back">
        <div className="content">
          <h3>ТИПУ ХОВЕР</h3>
          <p>
            А тут текст ще про опис шо ми їбать ведемо провект от і до кароче
            можна ще по пунктах шось перечисліть в стілі:
          </p>
          <ul>
            <li>пункт 1 тут ще буков трекба</li>
            <li>пункт 2 букви</li>
            <li>пункт 3 шось там я хз</li>
            <li>пункт 4 бла блабла</li>
          </ul>
          <p>
            тут шото ще текст я хз шо писать бла бла бла бла треба більше інфи і
            копірайтер якийсь я хз блабалбла пес патро байрактар
          </p>
          <button>Дивитись</button>
        </div>
      </div>
    </div>,
  ];

  return (
    <Container>
      <h2>Портфоліо</h2>
      <h1>
        МИ ДАЄМО БІЛЬШЕ, НІЖ ВИ ОЧІКУЄТЕ, БО ШУКАЄМО РІШЕННЯ, ЯКЕ{" "}
        <span>ПРАЦЮЄ НА 100%</span>
      </h1>

      <div className="carousel">{items.map((item) => item)}</div>
    </Container>
  );
};

const Container = styled.section`
  margin: 5rem 0 10rem 0;
  width: 90vw;
  margin-right: 0;
  overflow-x: hidden;

  .carousel {
    width: 90vw;
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 5rem 2rem 0;

    &::-webkit-scrollbar {
      height: 8px;
      background-color: ${colors.primaryGray};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.primaryBlue};
      border-radius: 10px;
      width: 24px;
    }
  }

  .card {
    display: inline-block;
    margin: 5rem 0 5rem 0;
    height: 38.5rem;
    min-width: 460px;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;

    &__side {
      height: 100%;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 25px;
      overflow: hidden;
      box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

      .content {
        padding: 2rem;
        font-size: 1.2rem;
        h3 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
        }

        button {
          margin: 3.8rem 40% 1rem 60%;
          background-color: transparent;
          border: 1px solid #fff;
          padding: 1rem 2rem;
          border-radius: 10px;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 600;
          transition: all 0.3s;

          &:hover {
            color: ${colors.primaryBlue};
            cursor: pointer;
            background-color: #fff;
          }
        }
      }

      &--front {
        background-color: ${colors.primaryGray};
      }

      &--back {
        background-color: ${colors.primaryBlue};
        transform: rotateY(180deg);
      }
    }

    &:hover .card__side--front {
      transform: rotateY(-180deg);
    }

    &:hover .card__side--back {
      transform: rotateY(0);
    }
  }
  h2 {
    color: ${colors.primaryBlue};
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  h1 {
    color: #000;
    width: 90%;
    font-size: 2.6rem;
    line-height: 3.2rem;

    span {
      color: ${colors.primaryBlue};
    }
  }
`;
export default Portfolio;
