import React from "react";
import styled from "styled-components";
import contactCenterKyiv from "../../assets/contactCenterKyiv.svg";
import Navigation from "../navigation/Navigation";
import { colors } from "../../styles/colors";

const CaseStudy = ({ currentProject, lang }) => {
  return (
    <Container>
      <div className="container ">
        <img src={currentProject.image} alt={currentProject.header[lang]} />

        <div className="centered">
          <div className="text">
            <h1>{currentProject.header[lang]}</h1>
            <h3>{currentProject.headingSecondary[lang]}</h3>
            {currentProject.text[lang]}
          </div>
          <div className="right">
            <div className="labels-container">
              {currentProject.labels[lang].map((label, index) => (
                <div key={index} className="label">
                  {label}
                </div>
              ))}
            </div>
            {currentProject.webSiteLink && (
              <div className="button-container">
                {lang === "UA" && (
                  <a
                    href={currentProject.webSiteLink}
                    target="blank"
                    className="go-to-site-btn"
                  >
                    Перейти на сайт
                  </a>
                )}
                {lang === "ENG" && (
                  <a
                    href={currentProject.webSiteLink}
                    target="blank"
                    className="go-to-site-btn"
                  >
                    Visit the site
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  min-height: 100vh;
  color: ${colors.primaryDarkGray};
  overflow-x: hidden;
  padding-top: 7rem;

  .container {
    img {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    padding-left: 0.5rem;
  }

  ul.dashed {
    list-style-type: none;
  }
  ul.dashed > li {
    text-indent: -5px;
  }
  ul.dashed > li:before {
    content: "-";
    text-indent: -5px;
    margin-right: 0.5rem;
  }

  ol {
    padding-left: 1.5rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-container {
    margin-top: 2rem;
    display: flex;
    width: 100%;

    .go-to-site-btn {
      background-color: ${colors.primaryViolet};
      width: 100%;
      text-align: center;
      color: ${colors.lightColor};
      border-radius: 16px;
      padding: 12px 24px;
      font-size: 18px;
      text-decoration: none;
      font-weight: 800;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 0 18px 0 #7a37ff32;
      }
    }
  }

  .container > div.centered {
    display: grid;
    grid-template-columns: 5fr 3fr;
    margin-top: 7rem;
    gap: 6rem;

    .text {
      h1 {
        font-weight: 600;
        font-size: 46px;
        line-height: 55.2px;
        text-transform: uppercase;
        margin-top: 0;
      }

      h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 31.2px;
      }

      h5 {
        font-weight: 700;
        font-size: 16px;
        margin: 0;
      }

      ol {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          ul {
            margin: 0;
            padding-left: 5px;
          }
        }
      }
    }

    .labels-container {
      padding: 1rem;
      background-color: ${colors.lightColor};
      border-radius: 16px;
      align-self: start;

      .label {
        display: inline-block;
        padding: 8px;
        border-radius: 8px;
        background-color: #fff;
        margin: 0.3rem;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .container > div.centered {
      grid-template-columns: 6fr 3fr;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 999px) {
    .text {
      h1 {
        font-size: 36px !important;
        line-height: 43.2px;
      }

      h3 {
        font-size: 20px !important;
        line-height: 26px;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .container > div.centered {
      grid-template-columns: 1fr !important;
      margin-top: 3rem;
      gap: 3rem;

      .labels-container {
        grid-row: 1;
      }
    }
  }
`;

export default CaseStudy;
