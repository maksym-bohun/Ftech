import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Footer = () => {
  return (
    <Container>
      <div className="centered footer">
        <div className="footer__column--1">
          <h2>ftECH</h2>
          <div>info@ftech.com.ua</div>
        </div>

        <div className="footer__column--2">
          <h2>Контакти</h2>
          <div className="contacts">
            <div className="contacts__ukraine">
              <h4>Україна</h4>
              <div>
                <div>Київ, вул.Звіринецька 63</div>
                <div>01014</div>
              </div>
              <div>+38 (044) 344-23-90</div>
            </div>
            <div className="contacts__usa">
              <h4>Україна</h4>
              <div>
                <div>Київ, вул.Звіринецька 63</div>
                <div>01014</div>
              </div>
              <div>+38 (044) 344-23-90</div>
            </div>
          </div>
        </div>

        <div className="footer__column--3">
          <h2>Посилання</h2>
          <div>Проєкти</div>
          <div>Карʼєра</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  .footer {
    display: grid;
    grid-template-columns: 5fr 11fr 6fr;
    padding: 4rem 0;
    gap: 6rem;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 28.8px;
      text-transform: uppercase;
    }

    &__column--1 {
      text-transform: uppercase;
      font-weight: 700;
      h2 {
        font-family: "Lato", sans-serif;
        font-size: 34px;
        font-weight: 900;
        line-height: 41.45px;
      }
    }

    &__column--2,
    &__column--3 {
      h2 {
        border-bottom: 1px solid ${colors.lightColor};
        padding-bottom: 1.2rem;
      }
    }

    &__column--2 {
      .contacts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;

        h4 {
          margin: 0;
          text-transform: uppercase;
          color: ${colors.secondaryGray};
        }

        > div {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
      }
    }

    &__column--3 {
    }
  }
`;

export default Footer;