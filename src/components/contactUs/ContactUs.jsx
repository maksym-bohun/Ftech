import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BsArrowUpRight } from "react-icons/bs";

const ContactUs = ({ lang }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [interests, setInterests] = useState([]);
  const [placeholders, setPlaceholders] = useState([]);

  useEffect(() => {
    if (lang === "UA") {
      setInterests([
        "для держави",
        "для бізнесу",
        "розробка",
        "Маркетинг",
        "Підтримка",
        "Дизайн",
      ]);
      setPlaceholders([
        "Ваше імʼя*",
        "Електронна пошта*",
        "Розкажіть нам трохи більше про ваш проєкт",
      ]);
    } else if (lang === "ENG") {
      setInterests([
        "For Government",
        "FOR BUSINESS",
        "development",
        "Marketing",
        "SUPPORT",
        "Design",
      ]);
      setPlaceholders([
        "Your name* ",
        "E-mail*",
        "Tell us more about your project",
      ]);
    }
  }, [lang]);

  const selectInterestHandler = (e) => {
    console.log(e.target.id);
    console.log(selectedInterests);
    if (selectedInterests.includes(interests[e.target.id])) {
      setSelectedInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== interests[e.target.id])
      );
    } else
      setSelectedInterests((prevInterests) => [
        ...prevInterests,
        interests[e.target.id],
      ]);
  };

  // НЕ ЗАКОНЧЕНО
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && <h1 className="section-header">У вас є ідея?</h1>}
        {lang === "ENG" && <h1 className="section-header">У вас є ідея?</h1>}
        <div className="contact-us">
          <div className="header">
            {lang === "UA" && <h2 className="green">Звʼяжіться з нами</h2>}
            {lang === "ENG" && <h2 className="green">contact us</h2>}
            <div className="header__email">info@ftech.com.ua</div>
          </div>

          <div className="form">
            <div className="inputs">
              <input type="text" required placeholder={placeholders[0]} />
              <input type="email" required placeholder={placeholders[1]} />
              <input type="text" placeholder={placeholders[2]} />
            </div>

            <div className="interests">
              <div className="interests__header">Мене цікавить..</div>
              {interests.map((interest, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    onClick={selectInterestHandler}
                    className={`interests__label ${
                      selectedInterests.includes(interest) ? "selected" : ""
                    }`}
                  >
                    {interest}
                  </div>
                );
              })}
            </div>

            <button type="submit">
              <BsArrowUpRight
                className="button__icon"
                size={20}
                strokeWidth={0.5}
              />
              <span className="button__text">відправити</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  letter-spacing: 1.8%;
  padding-bottom: 8rem;

  .contact-us {
    display: flex;
    gap: 5.4rem;
    margin-top: 5rem;

    .header {
      width: 35%;
      h2 {
        margin: 0;
        font-size: 68px;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 81.6px;
      }

      &__email {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 24px;
        line-height: 28.8px;
        margin-top: 1.6rem;
        background: transparent;
        transition: all 0.3s;
        background-size: 100% 200%;

        &:hover {
          animation: changeTextColor 1s ease forwards;
        }
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: -1.4rem;
      width: 65%;
      z-index: 2;
      .inputs {
        display: flex;
        flex-direction: column;

        input {
          border: 0;
          background-color: inherit;
          margin: 1rem 0;
          border-bottom: 1px solid ${colors.lightColor};
          font-size: 24px;
          padding-bottom: 1.4rem;
          padding-top: 0.4rem;
          font-weight: 400;
          width: 100%;
          outline: none;
          color: ${colors.lightColor};
          font-size: 24px;
          word-wrap: break-word;
          overflow-wrap: break-word;

          &:focus {
            border-color: ${colors.primaryGreen};
          }

          &.invalid {
            border-color: ${colors.primaryRed};
          }

          &::placeholder {
            color: #484848;
            line-height: 31.2px;
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        }
      }

      .interests {
        &__header {
          margin: 1.4rem 0 0.2rem;
          width: 100%;
        }

        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        &__label {
          display: inline-block;
          padding: 12px 24px;
          background-color: #29282d;
          border-radius: 8px;
          color: ${colors.lightColor};
          text-transform: uppercase;
          font-weight: 600;
          line-height: 21.82px;
          transition: all 0.3s;
          border: 2px solid transparent;
          z-index: 2;

          &:nth-child(3) {
            margin-right: 10rem;
            @media screen and (min-width: 1800px) {
              margin-right: 20rem;
            }
          }

          &:hover {
            box-shadow: 0 0 14px 0 ${colors.primaryGreen};
            cursor: pointer;
          }

          &:active {
            border: 2px solid ${colors.primaryGreen};
          }

          &.selected {
            border: 2px solid ${colors.primaryGreen};
            color: ${colors.primaryGreen};
          }
        }
      }

      button {
        font-size: 18px;
        font-weight: 800;
        line-height: 24.55px;
        background-color: ${colors.primaryYellow};
        padding: 12px 18px;
        color: ${colors.primaryDarkGray};
        border: none;
        border-radius: 16px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        align-self: start;
        margin-top: 4rem;
        letter-spacing: 1px;
        position: relative;
        transition: all 0.4s;
        border: 1px solid transparent;

        &:hover {
          cursor: pointer;
          background-color: ${colors.primaryDarkGray};
          border: 1px solid ${colors.primaryYellow};
          box-shadow: 0 0 14px 0 ${colors.primaryYellow};

          .button__text {
            animation: translateButtonText 0.4s forwards;
          }

          .button__icon {
            // transform: translateY(-50%) rotate(45deg);
            animation: rotateAndTranslateArrow 0.4s forwards;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    .contact-us {
      display: flex;
      margin-top: 5rem;
      gap: 4rem;

      .header {
        font-size: 18px;
        line-height: 21.6px;
        width: 25%;
        h2 {
          font-size: 36px;
          line-height: 43.2px;
          margin-bottom: 2rem;
        }
      }

      .form {
        width: 75%;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 4rem;

    .section-header {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .contact-us {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      gap: 2rem;

      .header {
        display: flex;
        line-height: 21.6px;
        width: 100%;
        h2 {
          width: 30%;
          font-size: 24px;
          line-height: 28.2px;
          margin-bottom: 2rem;
        }

        &__email {
          font-size: 18px;
          margin-left: 4rem;
        }
      }

      .form .inputs input:last-child {
        padding-bottom: 2.4rem;
      }

      .form .inputs input:last-child::placeholder {
        white-space: normal;
        font-size: 24px;
      }

      .form .inputs input:last-child:focus::placeholder {
        white-space: nowrap;
      }

      .form .inputs input:last-child:focus {
        padding-bottom: 1rem;
      }

      .form {
        width: 100%;
      }
    }

    .contact-us .form {
      .interests {
        &__header {
          margin: 1.4rem 0 0.2rem;
          width: 100%;
        }

        gap: 1rem;
        flex-wrap: wrap;

        &__label {
          &:nth-child(3) {
            margin-right: 0rem;
          }
        }
      }
    }

    .contact-us .form button {
      align-self: center;
    }
  }

  @media screen and (max-width: 390px) {
    .contact-us {
      .header {
        display: flex;
        flex-direction: column;
        line-height: 21.6px;
        width: 100%;
        h2 {
          width: 30%;
          font-size: 24px;
          line-height: 28.2px;
          margin-bottom: 0;
        }

        &__email {
          font-size: 18px;
          margin-left: 0;
        }
      }
    }
  }
`;
export default ContactUs;
