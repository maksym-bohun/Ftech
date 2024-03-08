import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import kiberSecurity from "../../assets/kiberSecurity.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ lang, header, image, urlName, staticCard = false }) => {
  return (
    <Container>
      <div className={`project ${staticCard ? "static" : ""}`}>
        <div className="project__side project__side--front">
          <h2>{header}</h2>
          <img src={image} alt={`${header} demo`} className="project__image" />
        </div>
        <div className="project__side project__side--back">
          <h2>{header}</h2>
          <Link to={`/caseStudy/${urlName}`} className="more-detail">
            {lang === "UA" && <span> детальніше</span>}
            {lang === "ENG" && <span> read more</span>}
            <div className="image">
              <BsArrowUpRight size={32} strokeWidth={0.6} />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  margin: 0 1rem;

  .more-detail {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    gap: 1rem;
    align-self: flex-end;
    padding: 0.5rem 0;
    padding-left: 1rem;
    &:link,
    &:visited {
      text-decoration: none;
      color: ${colors.primaryDarkGray};
    }
    .image {
      height: 50px;
      width: 50px;
      background-color: ${colors.primaryYellow};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .project {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 100%;
    display: block;
    min-width: 20rem;
    min-height: 26rem;

    &__image {
      width: 90%;
      // height: 15rem;
    }

    h2 {
      padding: 0.5rem !important;
    }

    &__side {
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      &--front {
        background-color: ${colors.secondaryDarkGray};

        align-items: center;
        padding-bottom: 0;
        gap: 1rem;
      }

      &--back {
        transform: rotateY(180deg);
        background-color: ${colors.secondaryDarkGray};
        height: 100%;

        .more-detail {
          span {
            color: ${colors.lightColor};
          }
          align-self: flex-start;
        }
      }
    }

    &:hover .project__side--front {
      transform: rotateY(-180deg);
    }

    &:hover .project__side--back {
      transform: rotateY(0);
    }

    h2 {
      color: ${colors.lightColor};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 23px;
      line-height: 28.8px;
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 1400px) {
    margin: 0;
    margin-left: -1rem;

    .project {
      transform: scale(90%) !important;
      min-width: 18rem;
      // min-height: 20rem;
    }
  }

  @media screen and (max-width: 999px) {
    margin: 0;

    .project {
      transform: scale(90%) !important;
      min-width: 14rem;
      margin: 0 0.5rem;
      min-height: 20rem;

      img {
        width: 90%;
      }
    }

    .project,
    .project__side {
      width: 100% !important;
      margin-left: -0.1rem;
    }
  }
  @media screen and (max-width: 760px) {
    margin: 0;

    .project {
      height: 100%;
      display: block;
      min-width: 180px;
      margin: 0 0.5rem;
      min-height: 17rem;
    }

    h2 {
      font-size: 16px !important;
      line-height: 19px !important;
    }
  }
`;

export default Card;
