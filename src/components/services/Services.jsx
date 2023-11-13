import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import shevronDown from "../../assets/shevronDown.svg";
import shevronTop from "../../assets/shevronTop.svg";

const Services = ({ lang }) => {
  const [openedBlock, setOpenedBlock] = useState(null);
  const [dropDownBlocks, setDropDownBlocks] = useState([]);

  useEffect(() => {
    if (lang === "UA")
      setDropDownBlocks([
        {
          number: "01",
          title: "розробка програмного забезпечення",
          content:
            "Розробляємо платформи, системи, тощо для держави та бізнесу. Ми завжди готові розробити рішення, яке вам буде допомогати.",
        },
        {
          number: "02",
          title: "UI/UX Дизайн",
          content:
            "Розробляємо платформи, системи, тощо для держави та бізнесу. Ми завжди готові розробити рішення, яке вам буде допомогати.",
        },
        {
          number: "03",
          title: "Digital Маркетинг",
          content:
            "Розробляємо платформи, системи, тощо для держави та бізнесу. Ми завжди готові розробити рішення, яке вам буде допомогати.",
        },
        {
          number: "04",
          title: "Команда підтримки",
          content:
            "Розробляємо платформи, системи, тощо для держави та бізнесу. Ми завжди готові розробити рішення, яке вам буде допомогати.",
        },
      ]);
    else if (lang === "ENG")
      setDropDownBlocks([
        {
          number: "01",
          title: "software development",
          content:
            "Our IT department is on hand to develop web solutions and applications to meet your needs.",
        },
        // НЕ ЗАКОНЧЕНО

        {
          number: "02",
          title: "UI/UX design",
          content:
            "Розробляємо платформи, системи, тощо для держави та бізнесу. Ми завжди готові розробити рішення, яке вам буде допомогати.",
        },
        {
          number: "03",
          title: "Digital MARKETING",
          content:
            "Our digital marketing team can assist you with whatever GEO you are focusing on for marketing.",
        },
        {
          number: "04",
          title: "support team",
          content:
            "We provide you with a highly qualified and responsible team to support the developed solution.",
        },
      ]);
  }, [lang]);

  const openBlockHandler = (e) => {
    if (openedBlock === e.target.closest(".drop-down__block").id) {
      setOpenedBlock(null);
      return;
    }
    setOpenedBlock(e.target.closest(".drop-down__block").id);
  };

  return (
    <Container>
      <div className="centered services-container">
        {lang === "UA" && <h1 className="section-header">Послуги</h1>}
        {lang === "ENG" && <h1 className="section-header">Services</h1>}

        <div className="drop-down">
          {dropDownBlocks.map((block, index) => (
            <div
              key={index}
              id={index}
              className="drop-down__block"
              onClick={openBlockHandler}
            >
              <div className="drop-down__block__number">{block.number}.</div>
              <div className="drop-down__block__text">
                <div className="drop-down__block__title">{block.title}</div>
                <div
                  className={`drop-down__content ${
                    openedBlock == index ? "" : "hidden"
                  }`}
                >
                  {block.content}
                </div>
              </div>
              <img
                src={openedBlock == index ? shevronTop : shevronDown}
                alt="shevron down"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 7rem;
  min-height: 35rem;
  color: ${colors.primaryDarkGray};

  h1 {
    margin: 0;
    padding: 0;
  }

  .services-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 6rem;

    .drop-down {
      width: 100%;
      display: flex;
      flex-direction: column;

      &__block {
        display: grid;
        grid-template-columns: 1fr 7fr 3fr;
        padding: 2rem 0 1rem 0;
        border-bottom: 1px solid ${colors.primaryDarkGray};
        cursor: pointer;

        &:first-child {
          border-top: 1px solid ${colors.primaryDarkGray};
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        &__number,
        &__title {
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 1.8%;
          line-height: 28.8px;
        }

        &__title {
          text-transform: uppercase;
        }

        .hidden {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          padding-bottom: 0;
          transition: all 0.3s;
        }

        img {
          justify-self: end;
        }
      }
      &__content {
        max-height: 100px; /* Достаточно большое значение */
        overflow: hidden;
        transition: max-height 0.8s, opacity 1s;
        padding-bottom: 1rem;
      }
    }
  }

  @media screen and (min-width: 1800px) {
    .services-container {
      gap: 8rem;
    }
  }
`;

export default Services;
