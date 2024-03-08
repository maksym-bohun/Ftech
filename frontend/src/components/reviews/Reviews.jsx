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
          header: [
            `Комунальна бюджетна установа "Контактний центр міста Києва"`,
          ],
          text: [
            `Велика подяка FTech за їх фантастичну командну роботу. Команда повністю виконала свою роботу, контракт № 48, підписаний 21 жовтня 2020 року, передбачав встановлення системи запису дзвінків з аналітикою мовлення в нашому програмному та апаратному забезпеченні.`,
            `Ми були приємно вражені, що FTech перевершували наші очікування. Команда встигала вчасно, була надзвичайно надійною та дуже оперативною. А ще, вони завжди відповідали на поставленні запитання. Результатом ми залишилися задоволені.`,
          ],
        },
        {
          header: [
            `Державне агентство автомобільних доріг України (Укравтодор)`,
          ],
          text: [
            `Минулого року Державне агентство автомобільних доріг України звернулося до ТОВ «ЕФ-ТЕК» з проханням вдосконалити систему звітності та моніторингу. Всі роботи були виконані відповідно до умов угоди та технічних вимог. Компанія ТОВ «ЕФ-ТЕК» надала якісні та своєчасні послуги. Результат нас повністю влаштував, все виконано згідно наших вимог.`,
          ],
        },
        {
          header: [`Державне агентство автомобільних доріг України`],
          text: [
            `Ми вдячні ТОВ «ЕФ ТЕК» за чудову роботу, оскільки тепер ми можемо контролювати стан доріг та систематично вести облік виконаних дорожніх робіт завдяки розширенню можливостей Платформи «E-road». Компанія виконала проєкт відповідно до умов угоди та наших технічних вимог.`,
          ],
        },
        {
          header: [
            `Анатолій Комірний,`,
            `Заступник Міністра з питань цифрового розвитку, цифрових трансформацій і цифровізації`,
          ],
          text: [
            `Ми залишились приємно вражені співпрацею з ТОВ «ЕФ ТЕК» щодо розробки програмного забезпечення для системи управління чергами вантажних автомобілів на кордоні. Компанія відмінно виконала свої обов'язки, дотримуючись умов договору та встановлених термінів. Рекомендуємо як надійного партнера.`,
          ],
        },
        {
          header: [
            `Валерій Кулик-Куличенко,`,
            `Заступник Голови Державної Служби України з безпеки на транспорті`,
          ],
          text: [
            `Ключовим для нас було вчасне та якісне надання ліцензійного програмного забезпечення Модуль «Автоматизоване робоче місце інспектора державної прикордонної служби до Єдиного комплексу інформаційних систем Укртрансбезпеки» —  і ТОВ «ЕФ ТЕК» вчасно виконали проєкт. `,
            `Ми дуже цінуємо їхній професіоналізм і високий стандарт обслуговування. Робота була проведена якісно, вчасно та в повному обсязі, без жодних проблем чи недоліків. 
        `,
            `Сподіваємось на подальшу співпрацю.`,
          ],
        },
      ]);
    else if (lang === "ENG")
      setBlocks([
        {
          header: [
            `Municipal Budgetary Institution "Kyiv City Contact Centre"`,
          ],
          text: [
            `Big thanks to FTech for their fantastic teamwork. They got the job done, Contract No. 48, signed on October 21, 2020, involved setting up a call recording system with speech analytics in our software and hardware.`,
            `We're thrilled to say that FTech consistently went above and beyond. They were on time, super reliable, and very responsive. They're like a dependable friend, always there to help us out.`,
          ],
        },
        {
          header: [`State Road Agency of Ukraine (Ukravtodor)`],
          text: [
            `Last year, the State Road Agency of Ukraine asked FTech to improve the reporting and monitoring system. All works were performed according to the contract terms and technical requirements. FTech provides high-quality and timely services. We were delighted with the result; everything was completed per our requirements.
          `,
          ],
        },
        {
          header: [`State Road Agency of Ukraine`],
          text: [
            `We are grateful to FTech for their remarkable work. We can now monitor the condition of the roads and systematically keep records of road works performed thanks to the expansion of the E-road Platform's capabilities. The company completed the project by the terms of the agreement and our technical requirements. `,
          ],
        },
        {
          header: [
            `Anatoliy Komirnyi,`,
            `Deputy Minister of Digital Development, Digital Transformation and Digitalisation`,
          ],
          text: [
            `We were pleasantly surprised by the cooperation with FTech on developing software for the truck queue management system at the border. The company has perfectly fulfilled its duties, adhering to the contract terms and the deadlines. We recommend them as a reliable partner.`,
          ],
        },
        {
          header: [
            `Deputy Head of the State Service of Ukraine for Transport Safety,`,
            `Valerii Kulyk-Kulichenko`,
          ],
          text: [
            `The key for us was the timely and high-quality provision of the licensed software module "Automated Workstation of the State Border Guard Service Inspector to the Unified Complex of Information Systems of the State Border Guard Service of Ukraine" - and FTech completed the project on time. `,
            `We appreciate their professionalism and high standard of service. The work was done qualitatively, on time, and without problems or shortcomings.`,
            `We look forward to further cooperation.`,
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
        {lang === "ENG" && <h1 className="section-header ">Reviews</h1>}
      </div>
      <div className="right">
        <div className="reviews">
          <div
            className={`reviews__container ${listIsFull ? "list-full" : ""}`}
          >
            {blocks.map((block, index) => (
              <div key={index} className="block">
                {block.header.map((header) => (
                  <h2 key={header} className="block__header">
                    {header}
                  </h2>
                ))}

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
