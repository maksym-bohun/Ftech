import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Advantages = ({ lang }) => {
  const list = useRef();
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  let blocks = [];

  if (lang === "UA")
    blocks = [
      {
        header: "Відповідаємо високим технічним стандартам",
        text: `Ми завжди встановлюємо високу планку. Наші продукти не лише мають бездоганний дизайн, вони також безпечні та ефективні в роботі, особливо у сферах, де існують суворі регуляції.`,
      },
      {
        header: "робимо так, щоб все працювало для вас",
        text: `Створення першокласної продукції - це лише початок. Ми тут, щоб допомогти вам запустити все у роботу. Наші експерти розробляють безперебійні процеси впровадження та вводять вашу команду в курс справи.`,
      },
      {
        header: "підтримуємо вас 24/7",
        text: `Розраховуйте на нас у будь-який час. Наша команда технічної підтримки знає продукти досконально, тому ви отримаєте швидку кваліфіковану допомогу, коли б вона не знадобилася.`,
      },
      {
        header: "Знаходимо індивідуальний підхід",
        text: `Ми враховуємо потреби кожного клієнта і завжди відкриті до кастомної розробки. Ваші потреби - на першому місці, і ми готові підлаштуватися під них.`,
      },
      {
        header: "Майстри складних CRM-систем",
        text: `Ми спеціалізуємося на побудові інтегрованих систем, включаючи облік будівництва та управління, які дають вам повний контроль та ефективність. Ми інтегруємо кожну частину вашого бізнесу, щоб він працював безперебійно..`,
      },
      {
        header: "Новатори цифрової трансформації",
        text: `Будучи одними з перших на ринку, ми заклали фундамент для цифрової трансформації та цифрування державних сервісів. Ми стояли біля витоків цифрової революції і продовжуємо бути її лідерами. Ваш успіх - наш пріоритет`,
      },
    ];
  else if (lang === "ENG")
    blocks = [
      {
        header: "We're tech perfectionists",
        text: `We're all about setting the bar high. Our products aren't just good; they're secure and efficient, even in places with strict rules.`,
      },
      {
        header: "We make it work for you",
        text: `Creating top-notch products is just the beginning. We're here to help you put them to work. Our experts develop smooth implementation processes and get your team up to speed.`,
      },
      {
        header: "We've got your back 24/7",
        text: `Count on us anytime. Our tech support team knows our products inside out, so you get quick, qualified help whenever needed.`,
      },
      {
        header: "Your way, always",
        text: `We're all ears. Your unique needs come first, and we're ready to customize to make it happen`,
      },
      {
        header: "Masters of complex CRM systems",
        text: `We specialize in creating systems that give you complete control and efficiency. We connect every part of your business to make it run smoothly.`,
      },
      {
        header: "Pioneers in digital transformation",
        text: `We were on the ground floor of the digital revolution, and we're still leading the charge. Your success is our priority.`,
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
      <div className="centered advantages">
        {lang === "UA" && <h1 className="section-header">Переваги</h1>}
        {lang === "ENG" && <h1 className="section-header">Why choose us?</h1>}
        <div className="blocks-container">
          <div className="blocks-list" onScroll={scrollHandler} ref={list}>
            <div className="overlay" style={{ opacity: overlayOpacity }}></div>
            {blocks.map((block, index) => (
              <div className="block" key={index}>
                <h2 className="block__header">{block.header}</h2>
                <p className="block__text">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  position: relative;
  padding-bottom: 20rem;
  overflow: hidden;

  .advantages {
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 9rem;
    padding-top: 5rem;

    h1 {
      padding: 1rem 1rem 2rem 0;
    }

    .blocks-container {
      position: relative;
    }

    .overlay {
      background: radial-gradient(
        ellipse at center bottom,
        ${colors.primaryDarkGray},
        rgba(28, 28, 28, 0.7)
      );
      opacity: 0.75;
      position: absolute;
      bottom: 0;
      height: 15%;
      pointer-events: none;
      right: 0;
      left: 0;
      box-shadow: 0px -5px 30px ${colors.primaryDarkGray};
    }

    .blocks-list {
      display: flex;
      flex-direction: column;
      // width: 100%;
      height: 76vh;
      overflow: scroll;
      overflow-x: hidden;

      .block {
        width: 100%;
        display: flex;
        gap: 3rem;
        padding: 2rem 1rem 2rem 0;
        border-bottom: 1px solid ${colors.lightColor};

        &:nth-child(2) {
          border-top: 1px solid ${colors.lightColor};
        }

        &__header {
          margin: 0;
          width: 38%;
          font-size: 24px;
          font-weight: 700;
          line-height: 28.8px;
          letter-spacing: 1.8%;
          text-transform: uppercase;
        }

        &__text {
          margin: 0;
          width: 62%;
          margin-left: 3.25rem;
          // margin-right: 2.4rem;
          line-height: 20.8px;
          font-size: 1rem;
          letter-spacing: 1.8%;
        }
      }
    }
  }

  @media screen and (min-width: 1800px) {
    .advantages {
      gap: 11rem;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    padding: 0 2rem;
    padding-bottom: 10rem;

    .advantages {
      gap: 2rem;

      .blocks-list {
        height: 90vh;
        width: 90%;
      }
    }
  }
`;

export default Advantages;
