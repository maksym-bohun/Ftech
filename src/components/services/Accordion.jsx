import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Accordion = () => {
  const [activeBtn, setActiveBtn] = useState("Розробка");
  const buttonNames = ["Розробка", "Дизайн", "Я хз", "Консультації"];
  const panels = {
    Розробка: (
      <div className="info">
        <div className="info-text">
          <h3>ТУТ ЗАГОЛОВОК ТИПУ ОСНОВНЕ</h3>
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
        </div>
      </div>
    ),

    Дизайн: (
      <div className="info">
        <div className="info-text">
          <h3>ДИЗАЙН</h3>
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
        </div>
      </div>
    ),
    "Я хз": (
      <div className="info">
        <div className="info-text">
          <h3>Я ХЗ</h3>
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
        </div>
      </div>
    ),
    Консультації: (
      <div className="info">
        <div className="info-text">
          <h3>Консультації</h3>
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
        </div>
      </div>
    ),
  };

  const [currentPanel, setCurrentPanel] = useState(panels["Розробка"]);

  const clickBtnHandler = (e) => {
    setActiveBtn(e.target.textContent);
    setCurrentPanel(panels[e.target.textContent]);
  };

  return (
    <Container className="accordion">
      <div className="actions">
        {buttonNames.map((buttonName) => (
          <button
            onClick={clickBtnHandler}
            className={`btn ${activeBtn === buttonName ? "btn--active" : ""}`}
          >
            {buttonName}
          </button>
        ))}
      </div>
      {currentPanel}
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  margin-left: -10vw;
  gap: 0.7rem;

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 40%;
    margin-left: 10vw;

    .btn {
      color: #d5d9e2;
      background-color: ${colors.primaryGray};
      font-size: 1.6rem;
      border: none;
      padding: 2.2rem;
      text-transform: uppercase;
      border-radius: 20px;
      transition: all 0.3s;

      &--active {
        background-color: ${colors.primaryBlue};
        color: #fff;
        font-weight: 600;

        font-size: 1.8rem;
      }
    }
  }

  .info {
    width: 60%;
    background-color: ${colors.primaryBlue};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 1.3rem 2.6rem;
    color: #fff;

    &-text {
      height: 100%;
      padding-right: 5rem;

      h3 {
        font-size: 1.4rem;
        margin-bottom: 0;
        text-transform: uppercase;
      }

      p {
        margin-top: 0.5rem;
        font-size: 1.3rem;
      }
    }
  }
`;

export default Accordion;
