import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import arrowIcon from "../../assets/arrowIcon.svg";

const ConnectLine = ({ lang }) => {
  return (
    <Container>
      {lang === "UA" && (
        <>
          {" "}
          <div>зв`язатись з нами</div>
          <img src={arrowIcon} alt="arrow icon" />
          <div>зв`язатись з нами</div>
          <img src={arrowIcon} alt="arrow icon" />
          <div>зв`язатись з нами</div>
          <img src={arrowIcon} alt="arrow icon" className="lg" />
          <div className="lg">зв`язатись з нами</div>
        </>
      )}

      {lang === "ENG" && (
        <>
          {" "}
          <div>contact us</div>
          <img src={arrowIcon} alt="arrow icon" />
          <div>contact us</div>
          <img src={arrowIcon} alt="arrow icon" />
          <div>contact us</div>
          <img src={arrowIcon} alt="arrow icon" />
          <div>contact us</div>
          <img src={arrowIcon} alt="arrow icon" className="lg" />
          <div className="lg">contact us</div>
        </>
      )}
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

  @media screen and (min-width: 1800px) {
    padding: 2rem;
    .lg {
      display: block;
    }
  }
`;

export default ConnectLine;
