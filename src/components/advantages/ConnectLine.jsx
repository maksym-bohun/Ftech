import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import arrowIcon from "../../assets/arrowIcon.svg";

const ConnectLine = ({ lang }) => {
  let text = "";

  if (lang === "UA") text = "Звʼязатись з нами";
  else if (lang === "ENG") text = "Contact us";

  return (
    <Container>
      <>
        <div>{text}</div>
        <img src={arrowIcon} alt="arrow icon" />
        <div>{text}</div>
        <img src={arrowIcon} alt="arrow icon" className="" />
        <div className="md">{text}</div>
        <div className="md--1">{text}</div>
        <img src={arrowIcon} alt="arrow icon" className="md" />
        <div className="lg">{text}</div>
        <img src={arrowIcon} alt="arrow icon" className="lg" />
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  position: absolute;
  background: linear-gradient(to right, #a0ef93, #d9ff6f);
  bottom: -1%;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  font-weight: 600;
  line-height: 46.8px;
  color: ${colors.primaryDarkGray};
  text-transform: uppercase;
  padding: 1rem 0;
  transform: rotate(2deg);
  z-index: 10;
  .lg {
    display: none;
  }

  .md {
    display: block;
  }

  .md--1 {
    display: block;
  }

  @media screen and (min-width: 1800px) {
    padding: 2rem;
    .lg {
      display: block;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1250px) {
    .md {
      display: none;
    }

    .md--1 {
      display: none;
    }
  }

  @media screen and (min-width: 1250px) and (max-width: 1400px) {
    .md {
      display: none;
    }
    .md--1 {
      display: block;
    }
  }
`;

export default ConnectLine;
