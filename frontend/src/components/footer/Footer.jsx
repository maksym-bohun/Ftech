import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

const Footer = ({ lang }) => {
  return (
    <Container>
      <div className="centered footer">
        <div className="footer__column--1">
          <h2>ftECH</h2>
          <a href="mailto:INFO@FTECH.COMPANY">INFO@FTECH.COMPANY</a>
        </div>

        <div className="footer__column--2">
          {lang === "UA" && <h2>Контакти</h2>}
          {lang === "ENG" && <h2>сontacts</h2>}
          <div className="contacts">
            {lang === "UA" && (
              <div className="contacts__ukraine">
                <h4>Україна</h4>
                <div>
                  <div>Київ, вул.Звіринецька 63</div>
                  <div>01014</div>
                </div>
                <a href="tel:+380443442390">+38 (044) 344-23-90</a>
              </div>
            )}
            {lang === "ENG" && (
              <div className="contacts__ukraine">
                <h4>Ukraine</h4>
                <div>
                  <div>Kyiv, 63 Zvirinetska St</div>
                  <div>01014</div>
                </div>
                <a href="tel:+380443442390">+38 (044) 344-23-90</a>
              </div>
            )}
            <div className="contacts__usa">
              <h4>USA</h4>
              <div>
                <div>Bruce Way, North Highlands</div>
                <div>CA 95660</div>
              </div>
              <a href="tel:+12793568085">+1 (279) 356-8085</a>
            </div>
          </div>
        </div>

        <div className="footer__column--3">
          {lang === "UA" && (
            <>
              <h2>Посилання</h2>
              <a href="/#portfolio">Проєкти</a>
              <Link to="/career">Карʼєра</Link>
              <div>Політика конфіденційності</div>
            </>
          )}
          {lang === "ENG" && (
            <>
              <h2>links</h2>
              <a href="/#portfolio">Projects</a>
              <Link to="/career">Careers</Link>
              <div>Privacy Policy</div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  overflow-x: hidden;
  background-color: #111111;
  a {
    color: inherit;
    text-decoration: none;
  }

  .footer {
    display: grid;
    grid-template-columns: 5fr 11fr 6fr;
    padding: 4rem 0;
    gap: 6rem;
    z-index: 10 !important;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 28.8px;
      text-transform: uppercase;
      margin-top: 0;
      padding-top: 2rem;
    }

    a {
      &:hover {
        animation: changeTextColor 1s;
      }
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
        gap: 3rem;

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
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 1300px) {
    .footer {
      grid-template-columns: 1fr 3fr;

      &__column--3 {
        grid-column: 2;
        margin-top: -2rem;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .footer {
      grid-template-columns: 1fr;
      gap: 2rem;

      &__column--1 {
        display: flex;
        align-items: end;
        h2 {
          margin: 0;
          padding: 0;
        }
        justify-content: space-between;
      }

      &__column--2 {
        .contacts {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.4rem;
        }
      }

      &__column--3 {
        grid-column: 1;

        h2 {
        }
        div {
          margin-top: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 390px) {
    .footer {
      &__column--1 {
        display: block;
        h2 {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default Footer;
