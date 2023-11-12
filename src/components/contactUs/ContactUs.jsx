import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/arrowIcon.svg";
import { colors } from "../../styles/colors";
import { BsArrowUpRight } from "react-icons/bs";

const ContactUs = () => {
  return (
    <Container>
      <div className="centered">
        <h1 className="section-header">У вас є ідея?</h1>
        <div className="contact-us">
          <div className="header">
            <h2 className="green">Звʼяжітся з нами</h2>
            <div className="header__email">info@ftech.com.ua</div>
          </div>

          <div className="form">
            <div className="inputs">
              <input type="text" required placeholder="Ваше імʼя*" />
              <input type="email" required placeholder="Електронна пошта*" />
              <input
                type="text"
                placeholder="Розкажіть нам трохи більше про ваш проєкт"
              />
            </div>

            <div className="interests">
              <div className="interests__header">Мене цікавить..</div>
              <div className="interests__label">для держави</div>
              <div className="interests__label">для бізнесу</div>
              <div className="interests__label">розробка</div>
              <div className="interests__label">Маркетинг</div>
              <div className="interests__label selected">Підтримка</div>
              <div className="interests__label">Дизайн</div>
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

          &:focus {
            border-color: ${colors.primaryGreen};
          }

          &.invalid {
            border-color: ${colors.primaryRed};
          }

          &::placeholder {
            color: #484848;
            line-height: 31.2px;
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

          &:nth-child(3) {
            margin-right: 10rem;
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
`;
export default ContactUs;